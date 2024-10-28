<script>
	// @ts-nocheck

	import AspectRatio from '$lib/components/ui/aspect-ratio/aspect-ratio.svelte';
	import Icon from '@iconify/svelte';

	// Sample image collection (replace with your actual image URLs)
	let images = [
		'https://picsum.photos/200/300?random=1',
		'https://picsum.photos/200/300?random=2',
		'https://picsum.photos/200/300?random=3',
		'https://picsum.photos/200/300?random=4',
		'https://picsum.photos/200/300?random=5',
		'https://picsum.photos/200/300?random=6',
		'https://picsum.photos/200/300?random=7',
		'https://picsum.photos/200/300?random=8',
		'https://picsum.photos/200/300?random=9'
	];
</script>

<section class="my-clicks flex flex-col gap-6">
	<h2 class="flex items-center gap-2 opacity-50 font-semibold uppercase opacity-70">
		My Clicks <Icon icon="ri:code-s-slash-line" class="text-xl" />
	</h2>

	<div class="mt-4 grid grid-cols-3 gap-4 overflow-hidden">
		{#each images as image, key}
			<section
				class="group relative overflow-hidden hover:cursor-pointer {key % 5 === 1
					? 'col-span-2 row-span-2'
					: 'col-span-1 row-span-1'}"
			>
				<img
					src={image}
					alt={`Image ${key + 1}`}
					class="h-full w-full rounded-lg object-cover shadow-md transition-transform duration-300 group-hover:scale-110"
					loading="lazy"
				/>
			</section>
		{/each}
	</div>
</section>
