<script>
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Footer from '../components/Footer.svelte';
	import Network from '../components/Home/Network.svelte';

	// @ts-nocheck
	import Profile from '../components/Home/Profile.svelte';
	import Projects from '../components/Home/Projects.svelte';
	import TechStack from '../components/Home/TechStack.svelte';
</script>

<svelte:head>
	<title>{'Vinay Kishore - Backend Engineer'}</title>
	<link rel="icon" href="/src/assets/favicon.svg" />
</svelte:head>

<ScrollArea type="scroll" class="flex max-h-screen w-full flex-col overflow-auto">
	<section
		class="content-wrapper mx-auto flex flex-col gap-[8vh] md:px-10 md:max-w-[750px] md:pb-[20vh] md:pt-[5vh] bg-card"
	>
		<!-- Profile chip -->
		<Profile />

		<!-- Projects -->
		<Projects />

		<!-- Tech stack -->
		<TechStack />

		<!-- Network handles -->
		<Network />

		<!-- Footer -->
		<Footer />
	</section>
</ScrollArea>
