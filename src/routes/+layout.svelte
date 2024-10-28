<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { ModeWatcher, setMode } from 'mode-watcher';
	import anime from 'animejs';
	import Navigation from '../components/Navigation.svelte';

	let { children } = $props();

	onMount(() => {
		anime({
			targets: '.reveal-anime',
			opacity: [0, 2],
			translateY: [25, 0],
			duration: 400,
			easing: function (el, i, total) {
				return function (t) {
					return Math.pow(Math.sin(t * (i + 1)), total);
				};
			}
		});
	});
</script>

<section class="layout relative h-screen w-screen items-center">
	<ModeWatcher defaultMode="dark" />
	<section class="center-section">
		{@render children()}
	</section>
	<section class="absolute bottom-6 left-1/2 w-fit -translate-x-1/2">
		<Navigation />
	</section>
</section>
