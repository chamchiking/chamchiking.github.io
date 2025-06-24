This project involved designing three modules for VGG16 hardware: convolution, fully connected, and pooling, using Verilog.

<br><br>

## **Convolution module | stream-oriented FSM & PE4 tile**

<img src="/projects/P3/imgs/conv_diagram.jpg" style="width:46rem;" alt="conv diagram" /><br>

• A 9-state finite-state machine (Idle → Receiving Input → Input Done → Receiving Bias → Im2col → Receiving Weight → Storing Weight → Calculate → Send) streams incoming feature maps, biases, and filter weights directly from VDMA into on-chip BRAMs (8 × 8 192-word for features, 8 × 18 432-word for im2col operands).
• Im2col pre-expansion converts each 3 × 3 receptive field into a 1 × 9 vector so that four vectors can be dispatched every two clock edges to the systolic processing element cluster (PE4).
• Each PE performs a signed 32-bit MAC per cycle; chaining four PEs in PE4 yields four parallel outputs, maintaining throughput even while propagating intermediate partial sums laterally.
• Hand-shaked in_fin_a / out_fin_a flags were added to every PE to mark the end of a filter row, enabling the controller to assert out_fin_a=1 exactly when the last valid MAC result becomes available, eliminating stall cycles.

<br><br>

## **Fully-connected (FC) module | baseline → systolic upgrade**

<img src="/projects/P3/imgs/conv_diagram.jpg" style="width:46rem;" alt="conv diagram" /><br>

• The original FC engine simply fetched 4 × 32-bit weights per cycle and accumulated them with an adder tree; profiling showed it dominated run-time once convolution became PE-bound.
• We re-factored FC into a 16 × 16 systolic array constructed from PE4 tiles. Weight tiles are pre-shift-loaded west-to-east while activation tiles stream north-to-south; this reuse pattern turns 256 scalar MACs into 16 cycles of wave-front processing, delivering a measured 2.6 × speed-up and freeing ~18 % BRAM for larger batch sizes (at identical 200 MHz).
• The state machine mirrors the convolution flow (featureReceive → biasReceive → weightReceive_0-3 → calculate), but removes the Im2col phase because activations are already flat vectors.

<br><br>

## **Pooling module | line-buffered max-pool 2 × 2 / stride 2**

<img src="/projects/P3/imgs/conv_diagram.jpg" style="width:46rem;" alt="conv diagram" /><br>

• Shares the same featureReceive, biasReceive, and weightReceive FSM skeleton so that a single AXI-lite control word can switch between conv / FC / pool kernels at run-time.
• Uses two 2-line circular buffers and a compare-accumulate datapath to emit pooled outputs every cycle once the pipeline is filled, guaranteeing no back-pressure on the preceding convolution layer.

<br><br>

The project provided insights into efficient matrix multiplication techniques and hardware optimization.<br>
After implementing and deploying them on FPGA, the team explored performance enhancement strategies with the development of the fully-streaming VGG16 pipeline on FPGA.
