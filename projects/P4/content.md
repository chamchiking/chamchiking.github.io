This project focused on creating a deep learning model capable of recognizing American Sign Language (ASL) on Nvidia's Jetson board. <br>

The solution included two primary components: data generation and model training. Data generation involved processing input images from A to Z using Mediapipe to extract 20 hand landmarks.<br>

The coordinates were normalized relative to the wrist base point and stored as lists. The recognition model utilized three fully connected layers to classify the 20 sets of x, y, z coordinates into 26 alphabets with 98.7% accuracy.<br>
