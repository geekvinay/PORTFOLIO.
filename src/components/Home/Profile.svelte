<script>
	import { Card, CardContent, CardFooter, CardHeader } from '$lib/components/ui/card';
	import * as Avatar from '$lib/components/ui/avatar';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import Icon from '@iconify/svelte';
	import config from '../../lib/env.config';

	const configVals = config();
</script>

<section class="profile reveal-anime rounded-md">
	<Card class="border-none bg-background">
		<CardHeader class="">
			<section class="wrapper flex h-full w-full items-center justify-between">
				<Avatar.Root class="h-14 w-14 rounded-md">
					<Avatar.Image src="https://github.com/geekvinay.png" alt="@vinaykishore.dev" />
					target="_blank"
				</Avatar.Root>
				<Button variant="secondary">
					<span class="mr-3 h-2 w-2 animate-pulse rounded-full bg-green-500"></span>
					Open to Work
				</Button>
			</section>
		</CardHeader>
		<CardContent class="flex flex-col gap-2 text-lg font-normal">
			<div>
				<h3 class="py-2 font-semibold">Hi, I'm Vinay Kishore 👋</h3>
				<span>
					As a <span class="font-semibold">software engineer</span>
					I craft captivating digital experiences that seamlessly blend technical expertise and UI design
				</span>
			</div>
		</CardContent>
		<CardFooter class="flex gap-2 ">
			<a
				href={`${configVals.socials.linkedin}`}
				target="_blank"
				class={`linkedin flex flex-1 justify-between ${buttonVariants({ variant: 'secondary' })} py-4`}
			>
				<span class="font-semibold opacity-80">Connect with me</span>
				<Icon icon="ri:linkedin-fill" class="text-2xl opacity-80" />
			</a>
			<a
				href={`${configVals.socials.mail}`}
				target="_blank"
				class={`mail ${buttonVariants({ variant: 'secondary' })} py-4`}
			>
				<Icon icon="ri:mail-fill" class="text-2xl opacity-80" />
			</a>
			<a
				href={`${configVals.socials.github}`}
				target="_blank"
				class={`github ${buttonVariants({ variant: 'secondary' })} py-4`}
			>
				<Icon icon="ri:github-fill" class="text-2xl opacity-80" />
			</a>
			<a
				href={`${configVals.socials.twitter}`}
				target="_blank"
				class={`twitter ${buttonVariants({ variant: 'secondary' })} py-4`}
			>
				<Icon icon="ri:twitter-fill" class="text-2xl opacity-80" />
			</a>
		</CardFooter>
	</Card>
</section>
