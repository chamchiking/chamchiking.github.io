In this project, we developed a DVS‑CIS sensor stream receiver on a Xilinx ZCU106 FPGA board, enabling real‑time fusion of asynchronous event‑based data and conventional frame‑based imagery. Our custom 10 Gbps MIPI controller decodes G‑AER formatted DVS events, performs an inline transpose to align column‑wise DVS frames to row‑wise CIS frames, and streams both data types to a host PC over PCIe for display and further processing.

Dynamic Vision Sensors (DVS) output sparse, asynchronous events in custom formats (e.g., ⟨t, x, y, p⟩), which are incompatible with standard MIPI CSI‑2 interfaces and impose high bandwidth and latency demands. Conventional CPUs struggle to decode high‑rate DVS streams (up to tens of thousands of fps) in real time alongside high‑resolution CIS data.

<br><br>

<img src="/projects/P7/imgs/mipi_controller_diagram.jpg" style="width:46rem;" alt="DVS Mincheol 2" /><br>

<img src="/projects/P7/imgs/transpose_logic.jpg" style="width:46rem;" alt="DVS Mincheol 2" /><br>


## **Key Contributions**

1. **10Gbps MIPI RX Subsystem**
  Designed a low‑latency MIPI D‑PHY interface supporting four 2.5 Gbps lanes, integrated with deskewing and packet decoding modules to handle high‑speed DVS streams.
2. **G‑AER Packet Decoder**
  Implemented an efficient group Address Event Representation (G‑AER) decoder that extracts event coordinates and timestamps, converting them into pixel data at full throughput.
3. **Inline Transpose Module**
  Developed a novel transpose unit using URAM banks to reorder column‑major DVS data into row‑major format, employing partial writes and double buffering to prevent frame drops and maximize DRAM bandwidth.
4. **Host‑FPGA PCIe Interface**
  Employed Xilinx XDMA over PCIe Gen3 × 4 (32 Gbps) to transfer synchronized DVS and CIS frames to the host PC, enabling real‑time visualization and alignment.
<br><br>

## **Results**

- **Throughput**: Decoded up to 13,900 fps of DVS events with zero frame drops and concurrent 60 fps CIS streaming.  
- **Latency**: Maintained sub‑millisecond end‑to‑end latency between sensor capture and host display.  
- **Scalability**: Low DSP and LUT usage leaves headroom for integrating on‑chip NPUs or additional IP cores.

<!-- <br>

**My Contributions**
1. Defined system requirements and overall architecture.  
2. Designed the MIPI RX subsystem, including the deskew, packet decoder, and transpose modules.  
3. Led FPGA implementation, resource optimization, and verification.  
4. Coordinated sensor integration, host interface development, and end‑to‑end system testing. -->
