<script>
	import TitleComponent from './Title_Component.svelte';
	import DatedComponent from './Dated_Component.svelte';

	export let publications = [
		'[C1] An Energy-Efficient Daily Surveillance System with DVS-CIS Sensor Fusion and Event-based NPU Triggering, submitted to ISCAS 2025 (under review).',
		'[C2] A DVS-CIS Sensor Data Receiver on FPGA with a 10 Gbps MIPI Controller, submitted to ISCAS 2025 (under review).',
		'[C3] Live Demonstration: DVS-CIS Sensor Fusion System for Real-Time DNN-Based Object Detection, submitted to ISCAS 2025 (under review).',
		'[C4] Towards Eight-bit Quantization for 3D U-Net Medical Image Segmentation via ROI-Based Calibration and Background-Aware Shift, accepted at ICCE-Asia 2024.',
		'[C5] A Winograd-Convolution-Based Accelerator on FPGA for Real-time Object Detection, accepted at ICCE 2025.',
		'[C6] A Low-Latency and Scalable Vector Engine with Operation Fusion for Transformers, published in AICAS 2024.',
		'[C7] Analysis of the Effect of Feature Denoising from the Perspective of Corruption Robustness, published in ITC-CSCC 2023.',
		'[C8] Enhancing Neural Networks Corruption Robustness with Convolution Kernel Size Change, presented at the Fall Conference of IEIE, 2023.',
		'[C9] Performance Comparison Depending on Normalization Method in Single Batch Training Environment, presented at the Summer Conference of IEIE, 2023.',
		'[C10] Implementation of a Convolution Layer Kernel Accelerator using High-Level Design Synthesis, presented at the Fall Conference of IEIE, 2022.'
	];
</script>

<div class="max-w-7xl mx-auto px-4 pt-5">
	<TitleComponent title="PUBLICATIONS" />
	<div class="space-y-6">
		<DatedComponent>
			<div class="flex flex-col text-xs text-gray-700 space-y-1">
				{#each publications as publication}
					<p>{publication}</p>
				{/each}
			</div>
		</DatedComponent>
	</div>
</div>
