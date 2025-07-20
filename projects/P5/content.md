<table>
  <tr>
    <td align="center">
      <img src="/projects/P5/imgs/vpu_architecture_DFX.jpg" width="300" /><br/>
      <figcaption class="text-sm text-center text-gray-500 mt-2">(a) DFX VPU</figcaption>
    </td>
    <td align="center">
      <img src="/projects/P5/imgs/vpu_architecture_Proposed.jpg" width="300" /><br/>
      <figcaption class="text-sm text-center text-gray-500 mt-2">(b) Proposed VPU</figcaption>
    </td>
  </tr>
</table>
<figcaption class="text-sm text-center text-gray-500">Low-Latency Vector Engine for Transformer Softmax and LayerNorm</figcaption>

### Overview

This project introduces a low-latency, scalable vector processing engine on FPGA designed to accelerate key transformer operations—LayerNorm and Softmax—which are bottlenecks in transformer inference due to long data dependencies and low arithmetic intensity. Built for data center inference workloads, the engine targets performance-critical vector operations in attention mechanisms by fusing operations and executing mean and variance in parallel. The design was implemented using Vitis HLS and verified on a Xilinx ZCU106 FPGA board, demonstrating significant latency reductions with efficient hardware utilization.

<img src="/projects/P5/imgs/bandwidth_64_latency_comparison.jpg" style="width:46rem;" class="mx-auto" alt="Transformer VPU Architecture" />
<figcaption class="text-sm text-center text-gray-500">Latency Evalutation of LayerNorm and Softmax in Bandwidth of 64 elements</figcaption>

<table>
    <tr>
        <td align="center">
            LayerNorm Baseline (DFX VPU)
        </td>
        <td align="center">
            LayerNorm Proposed Method
        </td>
    </tr>
    <tr>
        <td align="center">
            <div class="text-xs">
            $$
            \begin{aligned}
            \text{(loop 1)} &\quad \mu = \frac{1}{N} \sum X \\\\
            \text{(loop 2)} &\quad Y = X - \mu \\\\
            \text{(loop 3)} &\quad \frac{1}{\sigma} = \text{recipSqrt} \left( \frac{1}{N} \sum (Y \cdot Y) \right) \\\\
            \text{(loop 4)} &\quad Z = Y \cdot \frac{1}{\sigma} \\\\
            \text{(loop 5)} &\quad Z = Z \cdot \gamma \\\\
            \text{(loop 6)} &\quad \text{LayerNorm}(X) = Z + \beta
            \end{aligned}
            $$
            </div>
        </td>
        <td align="center">
            <div class="text-xs">
            $$
            \begin{aligned}
            \text{(loop 1)} \quad
            & \mu = \frac{1}{N} \sum X,\quad
            E[X^2] = \frac{1}{N} \sum X^2 \\\\
            & \frac{1}{\sigma} = \frac{1}{\sqrt{E[X^2] - \mu^2}} \\\\
            & Y \leftarrow (X - \mu) \cdot \frac{1}{\sigma} \\\\[1em]
            \text{(loop 2)} \quad
            & Y \leftarrow Y \cdot \gamma \\\\
            \text{(loop 3)} \quad
            & \text{LayerNorm}(X) \leftarrow Y + \beta
            \end{aligned}
            $$
            </div>
        </td>
    </tr>
</table>

### Key Contributions

1. Proposed a parallel datapath for mean and variance computation to reduce LayerNorm loop count from 6 to 3.  
2. Designed an instruction set to fuse element-wise and accumulation operations for Softmax and LayerNorm.  
3. Implemented a modular VPU pipeline with dedicated units: VFU, ATU, SFU, and OGU.  
4. Demonstrated latency reduction of 40–50% compared to the baseline with minimal area overhead.  
5. Verified the design with Vitis HLS and deployed it on Xilinx ZCU106 for real-time vector processing.  

### Technical Highlights

- **Architecture**: Pipelined VPU supporting loop-level fusion, micro-instruction control, and BRAM-based input/output.  
- **Interfaces**: BRAM/DDR streaming with instruction-driven scheduling; integrated into FPGA block design.  
- **Tools**: Vitis HLS, Vivado, Xilinx Co-Simulation, Python-based performance and precision evaluation.  
- **Algorithms**: LayerNorm and Softmax optimized with fused add-mult/sub-exp datapaths and FP32 accumulation fallback.  

### Results

- **Performance**: Achieved up to 50% latency reduction for Softmax and 40% for LayerNorm across input sizes.  
- **Scalability**: Supports bandwidths from 4 to 64 FP16 elements/cycle; consistent speedup across vector lengths.  
- **Power savings**: Reaches 1.57W at 125 MHz with 186.1 GOPS/W efficiency using 1033 DSPs and 2130 BRAM.  
