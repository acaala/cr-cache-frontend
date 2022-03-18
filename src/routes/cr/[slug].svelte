<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Loading from '$lib/Loading.svelte';
	import type { IHtml } from '../../interface';
	import { afterUpdate, onMount } from 'svelte';
	import { useApi } from '../../hooks/api';
	import { hidePopup } from '../../hooks/cr';
	import { page } from '$app/stores';

	let html = {
		time: '-',
		uncachedTime: '-',
		size: '-',
		response: undefined
	} as IHtml;

	let slug = `cr-${$page.params.slug}`;

	const loadScript = () => {
		const script = document.createElement('script');
		script.src =
			'https://development.coinrivet.com/wp-content/themes/coinrivet/assets/scripts/main.js?v=1.0.79';
		const secondScript = document.createElement('script');
		secondScript.src =
			'https://development.coinrivet.com/wp-content/themes/coinrivet/assets/scripts/landing.js?v=1.0.79';
		//   document.head.appendChild(script)
		document.head.appendChild(secondScript);
	};

	onMount(async () => {
		html = await useApi(slug);
		console.log(html);
		loadScript();
	});

	afterUpdate(() => {
		hidePopup(html);
	});
</script>

<div>
	<Header
		{...html}
		on:refetch={async () => {
			html = await useApi(`${slug}-clear`);
		}}
		on:clearCache={async () => {
			html = await useApi(slug);
		}}
	/>
	{#if html && html.response}
		{@html html.response}
	{:else}
		<div class="mt-10 w-full text-gray-600">
			<Loading />
		</div>
	{/if}
</div>
