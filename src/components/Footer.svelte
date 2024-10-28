<script>
	import { Button } from '$lib/components/ui/button';
	import { Card } from '$lib/components/ui/card';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardFooter from '$lib/components/ui/card/card-footer.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import signature from '../assets/signature.svg';
	import { mode } from 'mode-watcher';
</script>

<section class="footer mx-4 py-10">
	<Card class="items-center border-none">
		<CardHeader class="flex flex-col items-center">
			<h4 class="text-lg leading-none">Thanks for visiting</h4>
			<p class="opacity-40">Stay awesome</p>
		</CardHeader>
		<CardContent class="flex flex-col items-center">
			<img
				src={signature}
				alt=""
				class={`my-5 h-[50px] transition-all duration-500 ${$mode == 'dark' && 'invert-[100%] filter'}`}
			/>
		</CardContent>
		<CardFooter class="flex justify-center opacity-45">
			© 2024 Made By <a href="/" class="inline w-fit px-2 opacity-95 underline">Vinay Kishore</a> All Rights
			Reserved, Inspired from
			<a href="https://saud.gg/" class="inline w-fit px-2 opacity-95 underline">Saud</a>
		</CardFooter>
	</Card>
</section>
