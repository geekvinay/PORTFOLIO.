<script>
	import { Card } from '$lib/components/ui/card';
	import Icon from '@iconify/svelte';
	import config from '$lib/env.config';

	// Fetch data from the API
	const configVals = config();
</script>

<section class="tech-stack flex flex-col gap-4 overflow-y-auto px-4">
	<h2 class="flex items-center gap-2 pt-4 opacity-50 font-semibold uppercase opacity-70">
		Network <Icon icon="ri:heart-2-fill" class="text-xl" />
	</h2>
	<section class="stack-items grid w-full grid-cols-2 gap-2">
		<Card
			class="relative col-span-2 h-fit w-full rounded p-4 hover:cursor-pointer hover:bg-primary-foreground"
		>
			<h2 class="font-semibold">Send an email</h2>
			<p class="opacity-50">Send an email, I'll get back to you asap.</p>
			<a href={configVals.socials.mail} target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card
			class="relative h-fit w-full rounded p-4 hover:cursor-pointer hover:bg-primary-foreground"
		>
			<h2 class="font-semibold">Github</h2>
			<p class="opacity-50">Check out my Github profile.</p>
			<a href={configVals.socials.github} target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>

		<Card
			class="relative h-fit w-full rounded p-4 hover:cursor-pointer hover:bg-primary-foreground"
		>
			<h2 class="font-semibold">LinkedIn</h2>
			<p class="opacity-50">Let's connect on LinkedIn</p>
			<a href={configVals.socials.linkedin} target="_blank" class="absolute bottom-4 right-4">
				<Icon icon="ri:arrow-right-up-line" class="text-xl" />
			</a>
		</Card>
	</section>
</section>
