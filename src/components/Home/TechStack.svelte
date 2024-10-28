<script>
	import Card from '$lib/components/ui/card/card.svelte';
	import Icon from '@iconify/svelte';
</script>

<section class="tech-stack flex flex-col gap-4 overflow-y-auto px-4">
	<h2 class="flex items-center gap-2 opacity-50 opacity-50 font-semibold uppercase opacity-70 pt-4">
		Tech Stack <Icon icon="ri:stack-line" class="text-xl" />
	</h2>
	<section class="stack-items grid min-h-[50vh] w-full grid-cols-2 gap-2">
		<Card class="relative h-fit w-full rounded p-4 col-span-2 hover:bg-primary-foreground">
			<h2 class="font-semibold">React</h2>
			<p class="opacity-50 opacity-50">
				React is a popular JavaScript library for building user interfaces.
			</p>
			<a href="https://reactjs.org/" target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card class="relative h-fit w-full rounded p-4 hover:bg-primary-foreground">
			<h2 class="font-semibold">Svelte</h2>
			<p class="opacity-50 opacity-50">
				Svelte is a modern JavaScript framework that compiles components.
			</p>
			<a href="https://svelte.dev/" target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card class="relative h-fit w-full rounded p-4 hover:bg-primary-foreground">
			<h2 class="font-semibold">Node.js</h2>
			<p class="opacity-50 opacity-50">
				Node.js is a JavaScript runtime built on Chrome's V8 engine.
			</p>
			<a href="https://nodejs.org/" target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card class="relative h-fit w-full rounded p-4 hover:bg-primary-foreground">
			<h2 class="font-semibold">Tailwind CSS</h2>
			<p class="opacity-50 opacity-50">
				It is a utility-first CSS framework.
			</p>
			<a href="https://tailwindcss.com/" target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card class="relative h-fit w-full rounded p-4 hover:bg-primary-foreground">
			<h2 class="font-semibold">AWS</h2>
			<p class="opacity-50 opacity-50">
				AWS is the top cloud computing platform.
			</p>
			<a href="https://aws.amazon.com/" target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card class="relative h-fit w-full rounded p-4 col-span-2 hover:bg-primary-foreground">
			<h2 class="font-semibold">ShadCN UI</h2>
			<p class="opacity-50 opacity-50">
				ShadCN UI is a component library based on Tailwind CSS and Radix.
			</p>
			<a href="https://shadcn.dev/" target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>
	</section>
</section>
