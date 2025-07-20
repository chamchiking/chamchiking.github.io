
<img src="/projects/P6/imgs/npu_architecture.jpg" style="width:46rem;" class="mx-auto" alt="USB DVS Camera" />
<figcaption class="text-sm text-center text-gray-500">Winograd Based NPU Architecture</figcaption>

### Overview

This project presents a CNN accelerator based on Winograd convolution for real-time object detection on FPGA. It was designed to minimize computation and memory bottlenecks typically associated with convolutional layers in models like YOLOv3-Tiny. The system was deployed on a Xilinx ZCU106 FPGA and is aimed at edge inference applications such as multi-camera tracking in unmanned retail environments. It emphasizes low latency, efficient DSP/BRAM usage, and high throughput with INT8 quantization, suitable for real-time streaming.

<img src="/projects/P6/imgs/output_featuremap_pattern.jpg" style="width:46rem;" class="mx-auto" alt="USB DVS Camera" />
<figcaption class="text-sm text-center text-gray-500">Output Feature Map Pattern with 256-bit data blocks (a) Conventional Convolution (b) Winograd Convolution
</figcaption>

### Key Contributions

1. Developed a hardware-friendly Winograd-based CNN accelerator supporting real-time object detection.  
2. Introduced a custom data reordering method and line-buffered data access optimized for stride-2 processing.  
3. Designed and implemented INT8 post-training quantization using a hybrid symmetric-asymmetric approach with binary scaling.  
4. Integrated optimized memory access patterns to minimize BRAM usage and maximize DRAM alignment.  
5. Led FPGA system implementation and benchmarking on a Xilinx ZCU106 platform.  

### Technical Highlights

- **Architecture**: Fully pipelined, streaming NPU architecture using 4×4 Winograd convolution tiles and row stacking for stride alignment.  
- **Interfaces**: PCIe Gen3 ×4 interface to host PC for input/output streaming.  
- **Tools**: Verilog HDL, Vivado, Xilinx XDMA, Python-based quantization toolkit.  
- **Algorithms**: Winograd F(2x2, 3x3) convolution, post-training quantization, adaptive layer fusion, horizontal pass scheduling.  

### Results

- **Performance**: 5.134 ms latency per frame, 292.18 GOPS throughput at 125 MHz.  
- **Scalability**: Used only 105 BRAM and 1053 DSPs—suitable for compact deployment.  
- **Power savings**: Achieved 1.57 W power at 125 MHz; 186.1 GOPS/W efficiency, outperforming previous works in GOPS/W and resource efficiency.  
