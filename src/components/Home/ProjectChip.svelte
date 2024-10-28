<script>
	// @ts-nocheck

	export let project;

	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { CardContent, CardFooter, CardHeader } from '$lib/components/ui/card';
	import Card from '$lib/components/ui/card/card.svelte';
	import thumbnailFallback from '../../assets/thumbnail.webp';
	import { TechStack } from '$lib/enums';
	import { buttonVariants } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
</script>

<section class="project-chip">
	<Card>
		<CardHeader class="flex flex-col gap-2">
			<div class="links flex items-center justify-between gap-4 text-base">
				<h3 class="mr-auto flex justify-between py-2 font-semibold">
					{project.title}
				</h3>
				<a
					href={project.link}
					target="_blank"
					class={`flex gap-2 ${buttonVariants({ variant: 'outline' })}`}
				>
					Preview
					<Icon icon="ri:external-link-line" class="text-lg" />
				</a>
				<a
					href={project.githubLink}
					target="_blank"
					class={`flex gap-2 ${buttonVariants({ variant: 'outline' })}`}
				>
					Code
					<Icon icon="ri:github-fill" class="text-lg" />
				</a>
			</div>
			<AspectRatio ratio={10 / 4} class="overflow-hidden rounded-md">
				<img src={project.thumbnail || thumbnailFallback} alt="" class="object-fill hover:scale-110 transition-all duration-300" />
			</AspectRatio>
		</CardHeader>
		<CardContent>
			<p class="opacity-50 py-2 leading-relaxed">{project.description}</p>
		</CardContent>
		<CardFooter class="flex justify-between">
			<div class="tech-stack flex gap-4">
				{#each project.techStack as stackItem}
					<Icon icon={`${TechStack[stackItem]}`} class="text-xl text-primary opacity-75" />
				{/each}
			</div>
			<div class="flex gap-4">
				<a href={project.githubLink} class="">
					<Icon icon="ri:github-fill" class="text-2xl opacity-70" />
				</a>
				<a href={project.link} class="">
					<Icon icon="ri:arrow-right-up-fill" class="text-2xl opacity-70" />
				</a>
			</div>
		</CardFooter>
	</Card>
</section>
