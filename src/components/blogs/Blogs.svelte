<script>
	import Icon from '@iconify/svelte';
	import * as Table from '$lib/components/ui/table';
	import { Button } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';

	let blogs = [
		{
			title: 'Devouring Details',
			description: 'Remember the last moment of discovery?',
			year: '2025'
		},
		{
			title: 'The Art of Svelte',
			description: 'Exploring the beauty of Svelte framework.',
			year: '2023'
		}
	];

</script>

<section class="blogs">
	<h2 class="flex items-center gap-2 font-semibold uppercase ">
		Blogs <Icon icon="ri:code-s-slash-line" class="text-xl" />
	</h2>

	<Table.Root class="my-8">
		<Table.Body>
			{#each blogs as blog, index}
				<Table.Row>
					<Table.Cell class="border-b-none p-4">
						<Button variant="ghost" class="flex h-full w-full gap-2 p-4 py-6">
							<!-- Unique class for each title to apply Letterize and anime.js -->
							<h4 class="animated-title title-{index}">{blog.title}</h4>
							<p class="">{blog.description}</p>
							<Separator orientation="horizontal" class="flex-1" />
							<p class="">{blog.year}</p>
						</Button>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</section>

<style>
	/* Styling for animated characters */
	.char {
		display: inline-block;
		opacity: 0;
	}
</style>
