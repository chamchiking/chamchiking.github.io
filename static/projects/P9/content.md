<img src="/projects/P9/imgs/dvs_mincheol_2.jpg" style="width:46rem;" alt="DVS Mincheol 2" />
<figcaption class="text-sm text-center text-gray-500">Image of DVS camera using Samsung RC1S and MIPI to usb chip</figcaption>

### Overview

In this project, I developed a high-speed DVS based camera with Samsung's RC1s DVS chip.

<img src="/projects/P9/imgs/dvs_usb_camera.jpg" style="width:8rem;" class="mx-auto" alt="USB DVS Camera" />
<figcaption class="text-sm text-center text-gray-500">DVS camera with USB 3.1 streaming via Infineon CX3</figcaption>

We used the Infineon CX3 USB 3.1 Gen 1 controller (EZ-USB™ CX3 MIPI CSI-2 to USB 5Gbps camera controller) to interface between the DVS and the host system, acting as a MIPI-to-USB bridge.
I designed the whole system starting from camera PCB design, firmware code in the MIPI to USB 3.0 chip which supports 4 Gbps MIPI D-PHY, and the host application that can stream up to 1,000 fps DVS frames.
I implemented the firmware in C++ using a real-time operating system (RTOS) to remove the frame drops in the system, managing MIPI stream decoding, packetization, and USB communication.
On the host side, I developed a USB receiver application in C++ and Python using libusb, which performs real-time decoding of DVS event packets and streams them to the visualization pipeline.
