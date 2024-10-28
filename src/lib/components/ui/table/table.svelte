<script lang="ts">
	import type { HTMLTableAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	type $$Props = HTMLTableAttributes;

	let className: $$Props["class"] = undefined;
	export { className as class };
</script>

<div class="relative w-full overflow-auto">
	<table class={cn("w-full caption-bottom opacity-50", className)} {...$$restProps}>
		<slot />
	</table>
</div>
