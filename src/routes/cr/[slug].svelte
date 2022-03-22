<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Loading from '$lib/Loading.svelte';
	import type { IHtml } from '../../interface';
	import { afterUpdate, onMount } from 'svelte';
	import { useApi, loadScript } from '../../hooks/api';
	import { hidePopup } from '../../hooks/cr';
	import { page } from '$app/stores';
	import Itb from '$lib/Itb.svelte';

	let html = {
		time: '-',
		uncachedTime: '-',
		size: '-',
		response: undefined
	} as IHtml;
	let slug = `cr-${$page.params.slug}`;

	onMount(async () => {
		html = await useApi(slug);
		loadScript('js-main', null);
		if ($page.params.slug == 'home') loadScript('js-landing', null);
		if ($page.params.slug == 'prices' || $page.params.slug == 'market-data') {
			loadScript('js-prices', null);
		}
		initialize_itb_widget();
	});
	const initialize_itb_widget = () => {
		window['itbWidgetInit']({
			apiKey: 'Cw52L1w7SH3SLjjFQjKxq3n4EsMUg9wZ6EbjOhZP',
			options: {
				tokenId: 'BTC',
				loader: true,
				hideNavigator: true
			}
		});
	};

	afterUpdate(() => {
		hidePopup(html);
	});
</script>

{#if $page.params.slug == 'market-data'}
	<Itb />
{/if}

<div class={$page.params.slug == 'market-data' ? 'site crMarketData' : ' '}>
	<Header
		{...html}
		on:refetch={async () => {
			html = await useApi(`${slug}-clear`);
		}}
		on:clearCache={async () => {
			html = await useApi(slug);
		}}
	/>
	{#await useApi(slug)}
		<div class="mt-10 w-full text-gray-600">
			<Loading />
		</div>
	{:then}
		{#if html.response != undefined}
			{@html html.response}
		{:else}
			<div class="mt-10 pl-4 text-xl title-font font-medium text-gray-800 tracking-wide">
				Cache Cleared: <button
					class="text-white bg-gray-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-600 rounded text-lg"
					on:click={async () => {
						html = await useApi(slug);
					}}>Refetch</button
				>
			</div>
		{/if}
	{:catch err}
		<div class="mt-10 pl-4 title-font font-medium text-gray-800 tracking-wide">
			An Error has occured: <code class="text-red-700">{err}</code>
		</div>
	{/await}
</div>
