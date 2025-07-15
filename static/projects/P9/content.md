<img src="/projects/P9/imgs/dvs_mincheol_2.jpg" style="width:46rem;" alt="DVS Mincheol 2" /><br>

This project focused on developing a high-speed neuromorphic vision camera based on Samsung’s RC1S Dynamic Vision Sensor (DVS). I led the hardware and software co-design, starting with schematic capture and PCB design tailored to support a 4 Gbps MIPI CSI-2 D-PHY input.<br>

<img src="/projects/P9/imgs/dvs_usb_camera.jpg" style="width:8rem;" alt="USB DVS Camera" /><br>

We used the Infineon CX3 USB 3.1 Gen 1 controller (EZ-USB™ CX3 MIPI CSI-2 to USB 5Gbps camera controller) to interface between the DVS and the host system, acting as a MIPI-to-USB bridge. I implemented the embedded firmware in C++ using a real-time operating system (RTOS), managing MIPI stream decoding, packetization, and USB communication.<br>

On the host side, I developed a USB receiver application in C++ and Python using libusb, which performs real-time decoding of DVS event packets and streams them to the visualization pipeline.<br>

The final system achieved robust plug-and-play performance, low-latency event delivery, and was successfully demonstrated live at international academic venues. This work represents an end-to-end integration of high-speed vision hardware, embedded firmware, and host-side software, forming a scalable foundation for future DVS-based sensing platforms in robotics and computer vision.<br>
