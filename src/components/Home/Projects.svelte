<script>
	import Icon from '@iconify/svelte';
	import ProjectChip from './ProjectChip.svelte';

	const projects = [
		{
			title: 'maaKaVi',
			description:
				'An interactive educational platform where students can learn coding through community-created lessons. The platform features a documentation interface with interactive elements like a code editor or quizzes, and a forum for discussing doubts and questions.',
			techStack: [
				'VITE',
				'REACT',
				'NODE_JS',
				'TAILWIND_CSS',
				'SOCKET_IO',
				'TYPESCRIPT',
				'AWS',
				'JAVASCRIPT'
			],
			repoLink: 'https://github.com/geekvinay/maaKaVi',
			previewLink: 'https://maa-ka-vi.vercel.app',
			thumbnail: ''
		}
	];
</script>

<section class="projects reveal-anime flex flex-col gap-4 overflow-y-auto px-4">
	<h2 class="flex items-center gap-2 opacity-50 font-semibold uppercase opacity-70">
		Projects <Icon icon="ri:code-s-slash-line" class="text-xl" />
	</h2>

	{#each [...projects] as project}
		<ProjectChip {project} />
	{/each}
</section>
