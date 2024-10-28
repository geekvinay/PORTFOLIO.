<script>
	import ScrollArea from '$lib/components/ui/scroll-area/scroll-area.svelte';
	import Blogs from '../../components/blogs/Blogs.svelte';
	import Clicks from '../../components/blogs/Clicks.svelte';
	import Footer from '../../components/Footer.svelte';

	// @ts-nocheck
</script>

<svelte:head>
	<title>{'Vinay Kishore - Backend Engineer'}</title>
	<link rel="icon" href="/src/assets/favicon.svg" />
</svelte:head>

<ScrollArea type="scroll" class="flex max-h-screen w-full flex-col overflow-auto">
	<section
		class="content-wrapper mx-auto flex flex-col gap-[8vh] md:px-10 md:max-w-[750px] md:border-2 md:border-opacity-10 pb-[20vh] pt-[10vh] bg-card"
	>
		<!-- Blogs section -->
		<Blogs />

		<!-- My Clicks -->
		<Clicks />

		<!-- Footer -->
		<Footer />
	</section>
</ScrollArea>
