<img src="/projects/P8/imgs/small_object_detection.jpg" style="width:46rem;" alt="DVS Mincheol 2" />
<figcaption class="text-sm text-center text-gray-500">Enhanced Small Object Detection Using DVS-CIS fusion</figcaption>

<img src="/projects/P8/imgs/low_light_detection.jpg" style="width:46rem;" alt="DVS Mincheol 2" />
<figcaption class="text-sm text-center text-gray-500">Enhanced Object Detection in Low Light Environemnt Using DVS-CIS fusion</figcaption>

### Overview

In this project, we developed a daily surveillance system leveraging Dynamic Vision Sensor (DVS) and CMOS Image Sensor (CIS) for energy-efficient, real-time object detection.
By using DVS-based region-of-interest (ROI) detection to trigger the execution of a deep neural network (DNN) on a Neural Processing Unit(NPU), the system significantly reduces power consumption while improving the accuracy of object detection.

<img src="/projects/P8/imgs/dvs_object_detection_alg.jpg" style="width:46rem;" alt="DVS Mincheol 2" />
<figcaption class="text-sm text-center text-gray-500">Result Comparison of Proposed DVS ROI Detection Algorithm</figcaption>

### Key Contributions

1. Designed and implemented a sensor fusion system with an NPU using two Xilinx ZCU106 FPGA boards.
2. Developed a real-time DVS ROI detection algorithm using a custom scoring approach to handle irregular objects and noisy environments.
3. Integrated a YOLOv3-Tiny-based NPU accelerated by Winograd Convolution for low-latency inference (18ms at 200MHz).
4. Evaluated system performance over 24 hours, achieving 31.5% energy savings compared to a baseline always-on NPU system.
5. Developed the full hardware/software stack from DVS/CIS acquisition to PCIe transmission and host-side visualization.

### Key Features

- **Sensor Fusion**: Combines asynchronous DVS (2000fps) and CIS (60fps) streams via AXI on FPGA1.
- **Event-based Triggering**: Activates NPU only when DVS detects meaningful activity, reducing energy usage.
- **Real-Time Processing**: End-to-end pipeline from sensors to NPU to host PC with minimal latency.
- **Power Efficiency**: NPU achieves 156.24 GOPS/W while maintaining 362.01 GOPS throughput.

### Hardware Setup

- **Sensors**: Samsung DVS (960x720 @ 2000fps), LI-IMX274MIPI-FMC CIS (FHD @ 60fps).
- **Processing**: Two ZCU106 FPGAs—one for sensor interface, one for NPU.
- **Data Path**: AXI streaming → DDR4 buffering → PCIe → Host PC → NPU FPGA.

### Results

- **Energy Reduction**: 25.4% lower average system power by triggering NPU only during relevant scenes.
- **Detection Improvement**: Enhanced accuracy in low-light and small-object scenarios using DVS-CIS fusion.
