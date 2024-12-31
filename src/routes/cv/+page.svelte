<script>
	import CvEducation from '../../components/Cv/Cv_Education.svelte';
	import CvResearchIntereset from '../../components/Cv/Cv_ResearchIntereset.svelte';
	import CvPublication from '../../components/Cv/Cv_Publication.svelte';

	export let name = 'Mincheol Cha';
	export let email = 'mccha@capp.snu.ac.kr';
	export let github = 'https://github.com/chamchiking';

	export let patents = [
		'[P1] Low-Latency and Scalable Vector System with Operation Fusion, Korean Patent DP240209, filed May 2024 (pending).'
	];

	export let technicalExperience = [
		{
			role: 'Graduate Researcher',
			organization: 'Computer Architecture and Parallel Processing Lab (CAPP Lab), Seoul, Korea',
			period: 'Jan 2023 – Present',
			details: [
				'Developed WinoConv-based engine for real-time object detection on Xilinx ZCU106 board.',
				'Designed a novel hardware-friendly post-training quantization scheme for Tiny-YOLOv3 model.',
				'Achieved 4k 60fps real-time object detection with a latency of 18 ms and throughput of 362 GOPS.'
			]
		},
		{
			role: 'Lead Hardware Engineer',
			organization: 'Neuro-Reality Vision (NRV Corp), Dongtan, Korea',
			period: 'May 2021 – Present',
			details: [
				'Designed a DVS MIPI Rx subsystem IP capable of up to 13,000 fps.',
				'Developed a full SoC evaluation platform for DVS sensors with no frame loss at high speeds.'
			]
		},
		{
			role: 'Backend, DevOps Engineer',
			organization: 'Poomang Corp, Seoul, Korea',
			period: 'Jan 2021 – Apr 2021',
			details: [
				'Implemented TDD using pytest and reduced manual testing efforts.',
				'Integrated NoSQL DynamoDB for improved efficiency and reduced latency.'
			]
		}
	];

	export let scholarships = [
		'BK21 Scholarship, M.Sc. at Seoul National University (Dec 2023)',
		'University Merit Scholarship for Academic Excellence, M.Sc. (Dec 2023)',
		'University Merit Scholarship for Academic Excellence, B.Sc. (2016 - 2021, 4 semesters)'
	];

	export let leadershipActivities = [
		'Technical leader of a team of two graduate and three undergraduate students in FPGA design.',
		'Key contributor to DVS camera product development and FPGA evaluation platforms at NRV Corp.',
		'CEO and founding member of Connect Corp, delivering web-based automation services.'
	];

	export let languages = [
		'English: Fluent (TOEFL 105)',
		'Korean: Native',
		'Chinese: Basic conversational'
	];

	export let references = [
		'Professor Hyuk Jae Lee, Ph.D., Department of Electrical and Computer Engineering, SNU (Email: hjlee@capp.snu.ac.kr)',
		'Professor Xuan Truong Nguyen, Ph.D., Department of Next Generation Semiconductor, SNU (Email: truongnx@snu.ac.kr)',
		'Professor Hyunsurk Ryu, Ph.D., CEO of Neuro-Reality Vision Corporation (Email: eric.ryu@snu.ac.kr)'
	];
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<div class="text-xl font-bold mb-6">{name}</div>
	<div class="mb-6">
		<p>Email: <a href="mailto:{email}" class="text-blue-500">{email}</a></p>
		<p>GitHub: <a href={github} class="text-blue-500">{github}</a></p>
	</div>

	<CvEducation />

	<CvResearchIntereset />

	<CvPublication />

	<div class="mb-10">
		<h3 class="text-lg font-bold">PATENTS</h3>
		<ul class="list-none">
			{#each patents as patent}
				<li>{patent}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-10">
		<h3 class="text-lg font-bold">TECHNICAL EXPERIENCE</h3>
		<ul class="list-none">
			{#each technicalExperience as experience}
				<li>
					<p><strong>{experience.role}</strong></p>
					<p><strong>{experience.organization}</strong></p>
					<p>{experience.period}</p>
					<ul class="list-disc list-inside">
						{#each experience.details as detail}
							<li>{detail}</li>
						{/each}
					</ul>
				</li>
			{/each}
		</ul>
	</div>

	<div class="mb-10">
		<h3 class="text-lg font-bold">SCHOLARSHIP</h3>
		<ul class="list-none">
			{#each scholarships as scholarship}
				<li>{scholarship}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-10">
		<h3 class="text-lg font-bold">LEADERSHIP AND ACTIVITIES</h3>
		<ul class="list-none">
			{#each leadershipActivities as activity}
				<li>{activity}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-10">
		<h3 class="text-lg font-bold">LANGUAGES</h3>
		<ul class="list-none">
			{#each languages as language}
				<li>{language}</li>
			{/each}
		</ul>
	</div>

	<div class="mb-10">
		<h3 class="text-lg font-bold">REFERENCES</h3>
		<ul class="list-none">
			{#each references as reference}
				<li>{reference}</li>
			{/each}
		</ul>
	</div>
</div>
