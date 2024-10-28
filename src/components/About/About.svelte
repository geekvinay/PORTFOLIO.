<script>
	import { Card } from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
</script>

<section class="hero-section">
	<Card class="border-none">
		<CardContent class="flex flex-col gap-4 px-10">
			<div class="content flex flex-col gap-2">
				<h2 class="flex items-center gap-2 text-sm font-semibold uppercase">Where I'M From</h2>
				<p class="text-lg leading-loose opacity-50">
					I was born and raised in Utica, NY. My Dad worked as a mail carrier for the Post Office.
					My Mom worked as a Kindergarten Teacher. Growing up they repeatedly told me to get off the
					computer and go outside. The OG Touch Grass™. I'm glad I did. There's not a ton to do in
					Utica but there is a ton to eat and the food is definitely better than where you're from.
				</p>
			</div>
			<div class="content flex flex-col gap-2">
				<h2 class="flex items-center gap-2 text-sm font-semibold uppercase">What I used to Do</h2>
				<p class="text-lg leading-loose opacity-50">
					When I was 13, I got my first job as a dishwasher at REDACTEDDDDD [redacted due to child
					labor laws]. After that, I made pizzas at a pizzeria, chased kids around as a security
					guard at an elementary school, and tried to sell mattresses I knew nothing about at a
					furniture store.
				</p>
			</div>
			<div class="content flex flex-col gap-2">
				<h2 class="flex items-center gap-2 text-sm font-semibold uppercase">What I Do Now</h2>
				<p class="text-lg leading-loose opacity-50">
					Today I'm a Product Designer at Vercel ↗ designing new experiences. Previously, I was
					helping design Figma AI at Figma ↗. Before that, I was the as an Founding Product
					Designer at Diagram ↗ where we explored AI in design.
				</p>
			</div>
			<div class="content flex flex-col gap-2">
				<h2 class="flex items-center gap-2 text-sm font-semibold uppercase">Where I'm At Now</h2>
				<p class="text-lg leading-loose opacity-50">
					Today, I live in San Francisco, California. When I'm not working, you can usually find me
					with my dog at the beach, the park, or the redwoods.
				</p>
			</div>
			<div class="content flex flex-col gap-2">
				<h2 class="flex items-center gap-2 text-sm font-semibold uppercase">
					What I'm Looking For
				</h2>
				<p class="text-lg leading-loose opacity-50">
					Impactful, purposeful work with a diverse team of talented people. I also think the
					personal computer needs its iPhone moment ↗.
				</p>
			</div>
		</CardContent>
	</Card>
</section>
