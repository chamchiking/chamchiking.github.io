<img src="/projects/P7/imgs/mipi_controller_diagram.jpg" style="width:46rem;" class="mx-auto" alt="DVS Mincheol 2" />
<figcaption class="text-sm text-center text-gray-500">Diagram of MIPI DPHY controller IP</figcaption>

### Overview

Dynamic Vision Sensors (DVS) are neuromorphic image sensors that operate fundamentally differently from traditional cameras. Instead of capturing full image frames at a fixed rate, DVS detect brightness changes asynchronously and output sparse event streams with **extremely low latency (over 2,000 fps)** and **very low power consumption (~65 mW on Samsung’s RC1S Gen2 sensor)**.
This makes DVS ideal for real-time, high-speed applications such as robotics, autonomous systems, and surveillance — especially under challenging conditions like low light or fast motion.

However, DVS outputs data in a custom format (e.g., ⟨t, x, y, polarity⟩) that is not compatible with standard video interfaces like MIPI CSI-2, and conventional processors struggle to decode high-throughput DVS streams alongside standard frame-based CIS data.

To address this, we developed a real-time DVS-CIS sensor fusion system on a Xilinx ZCU106 FPGA. Our system includes a custom 10 Gbps MIPI D-PHY receiver, a G-AER event decoder, and a URAM-optimized transpose engine to align asynchronous DVS data with synchronous CIS frames. The fused data is streamed over PCIe to a host PC for real-time visualization and processing.

<img src="/projects/P7/imgs/transpose_logic.jpg" style="width:46rem;" class="mx-auto" alt="DVS Mincheol 2" />
<figcaption class="text-sm text-center text-gray-500">Transpose IP Operation Diagram</figcaption>

### Key Contributions

1. **10Gbps MIPI RX Subsystem**
  Designed a low‑latency MIPI D‑PHY interface supporting four 2.5 Gbps lanes, integrated with deskewing and packet decoding modules to handle high‑speed DVS streams.
2. **G‑AER Packet Decoder**
  Implemented an efficient group Address Event Representation (G‑AER) decoder that extracts event coordinates and timestamps, converting them into pixel data at full throughput.
3. **Inline Transpose Module**
  Developed a novel transpose unit using URAM banks to reorder column‑major DVS data into row‑major format, employing partial writes and double buffering to prevent frame drops and maximize DRAM bandwidth.
4. **Host‑FPGA PCIe Interface**
  Employed Xilinx XDMA over PCIe Gen3 × 4 (32 Gbps) to transfer synchronized DVS and CIS frames to the host PC, enabling real‑time visualization and alignment.

### Results

- **Throughput**: Decoded up to 13,900 fps of DVS events with zero frame drops and concurrent 60 fps CIS streaming.  
- **Latency**: Maintained sub‑millisecond end‑to‑end latency between sensor capture and host display.  
- **Scalability**: Low DSP and LUT usage leaves headroom for integrating on‑chip NPUs or additional IP cores.
