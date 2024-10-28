<script>
	// @ts-nocheck

	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { Separator } from '$lib/components/ui/separator';
	import Icon from '@iconify/svelte';
	import config from '$lib/env.config';
	import { setMode, mode } from 'mode-watcher';
	import anime from 'animejs/lib/anime.es.js'; // Import Anime.js
	import { sound } from 'svelte-sound';
	import clickSound from '../assets/click.mp3';

	const configVals = config();
	let sounds = 'enabled';

	function toggleMode() {
		if ($mode === 'dark') {
			setMode('light');
		} else {
			setMode('dark');
		}
	}

	function toggleSound() {
		if (sounds === 'enabled') {
			sounds = 'disabled';
		} else {
			sounds = 'enabled';
		}
	}

	// Animation function for button hover
	function animateButton(event) {
		const target = event.currentTarget;

		// Reset any existing animation
		anime.remove(target);

		// Animate scale and shadow
		anime({
			targets: target,
			scale: 1.1,
			boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)',
			duration: 200,
			easing: 'easeInOutQuad',
			complete: function () {
				// Reset after hover out
				anime({
					targets: target,
					scale: 1,
					boxShadow: '0 0px 0 rgba(0, 0, 0, 0)',
					duration: 200,
					easing: 'easeInOutQuad'
				});
			}
		});
	}
</script>

<section class="navigation flex h-fit w-full gap-3 rounded-xl border bg-background p-3 shadow-2xl">
	<!-- Sections -->
	<a href="/" use:sound={{ src: clickSound, events: ['click'] }}>
		<Button
			variant="secondary"
			class="navigation-button home h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:home-fill" class="text-2xl" />
		</Button>
	</a>
	<a href="/my-work" use:sound={{ src: clickSound, events: ['click'] }}>
		<Button
			variant="secondary"
			class="navigation-button projects h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:tools-fill" class="text-2xl" />
		</Button>
	</a>
	<a href="/about" use:sound={{ src: clickSound, events: ['click'] }}>
		<Button
			variant="secondary"
			class="navigation-button photos h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:heart-2-fill" class="text-2xl" />
		</Button>
	</a>
	<a href="/blogs" use:sound={{ src: clickSound, events: ['click'] }}>
		<Button
			variant="secondary"
			class="navigation-button blogs h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:quill-pen-fill" class="text-2xl" />
		</Button>
	</a>
	<Separator orientation="vertical" class="mx-1 my-3 border-r-2" />

	<!-- Socials -->
	<a href={configVals.socials.twitter} target="_blank">
		<Button
			variant="secondary"
			class="navigation-button twitter h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:twitter-fill" class="text-2xl" />
		</Button>
	</a>
	<a href={configVals.socials.mail} target="_blank">
		<Button
			variant="secondary"
			class="navigation-button mail h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:mail-fill" class="text-2xl" />
		</Button>
	</a>
	<a href={configVals.socials.github} target="_blank">
		<Button
			variant="secondary"
			class="navigation-button github h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			<Icon icon="ri:github-fill" class="text-2xl" />
		</Button>
	</a>

	<Separator orientation="vertical" class="mx-1 my-3 border-r-2" />

	<!-- Controls -->
	<span use:sound={{ src: clickSound, events: ['click'] }}>
		<Button
			variant="secondary"
			class="mode h-14 w-14 rounded-xl transition-all duration-200"
			on:click={toggleMode}
		>
			{#if $mode === 'dark'}
				<Icon icon="ri:moon-fill" class="text-2xl" />
			{:else if $mode === 'light'}
				<Icon icon="ri:sun-fill" class="text-2xl" />
			{:else}
				<Icon icon="ri:sun-fill" class="text-2xl" />
			{/if}
		</Button>
	</span>
	<!-- <span use:sound={{ src: clickSound, events: ['click'] }}>
		<Button
			variant="secondary"
			class="navigation-button sound h-14 w-14 rounded-xl"
			on:mouseenter={animateButton}
		>
			{#if sounds == 'enabled'}
				<Icon icon="ri:volume-up-fill" class="text-2xl" />
			{:else if sounds == 'disabled'}
				<Icon icon="ri:volume-mute-fill" class="text-2xl" />
			{/if}
		</Button>
	</span> -->
</section>

<style>
	.navigation-button {
		@apply transition-all duration-200 hover:scale-110;
	}
</style>
