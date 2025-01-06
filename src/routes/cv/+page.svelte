<script>
	import CvEducation from '../../components/Cv/Cv_Education.svelte';
	import CvResearchIntereset from '../../components/Cv/Cv_ResearchIntereset.svelte';
	import CvPublication from '../../components/Cv/Cv_Publication.svelte';
	import CvPatent from '../../components/Cv/Cv_Patent.svelte';
	import CvScholarship from '../../components/Cv/Cv_Scholarship.svelte';
	import CvLanguage from '../../components/Cv/Cv_Language.svelte';

	export let name = 'Mincheol Cha';
	export let email = {
		display: 'mccha@capp.snu.ac.kr',
		link: 'mccha@capp.snu.ac.kr'
	};
	export let github = {
		display: 'chamchiking (GitHub)',
		link: 'https://github.com/chamchiking'
	};
	export let homepage = {
		display: 'chamchiking.io',
		link: 'https://chamchiking.github.io'
	};
</script>

<div class="max-w-7xl mx-auto px-4 py-10">
	<!-- Mincheol Cha Headline -->
	<div class="max-w-7xl mx-auto px-4 pt-5">
		<div class="flex flex-col">
			<div class="flex items-baseline gap-6">
				<div class="w-16"></div>
				<div class="flex-1 flex flex-col space-y-1 font-bold text-2xl py-6 leading-6">
					{name}
					<a href={`/cv/CV_mincheol.pdf`} target="_blank" class="flex items-center gap-2 text-sm">
						<i class="fa-solid fa-file-pdf"></i> <span>PDF</span>
					</a>
				</div>
			</div>
		</div>

		<div class="flex flex-col">
			<div class="flex items-baseline gap-6">
				<div class="w-16 text-gray-500 text-xs text-right whitespace-nowrap"></div>

				<div class="flex-1 flex flex-col text-sm leading-6">
					<p><a href="mailto:{email.link}">{email.display} </a></p>
					<!-- <p><a href={github.link}>{github.display} </a></p> -->
					<p><a href={homepage.link}>{homepage.display}</a></p>
				</div>
			</div>
		</div>
	</div>

	<CvEducation />

	<CvResearchIntereset />

	<CvPublication />

	<CvPatent />

	<CvScholarship />

	<CvLanguage />
</div>
