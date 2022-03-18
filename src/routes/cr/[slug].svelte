<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Loading from '$lib/Loading.svelte';
	import type { IHtml } from '../../interface';
	import { afterUpdate, onMount } from 'svelte';
	import { useApi, loadScript } from '../../hooks/api';
	import { hidePopup } from '../../hooks/cr';
	import { page } from '$app/stores';

	let html = {
		time: '-',
		uncachedTime: '-',
		size: '-',
		response: undefined
	} as IHtml;

	let slug = `cr-${$page.params.slug}`;
	$: template = html;

	onMount(async () => {
		html = await useApi(slug);
		loadScript('js-main');
		if ($page.params.slug == 'home') loadScript('js-landing');
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
	{#await useApi(slug)}
		<div class="mt-10 w-full text-gray-600">
			<Loading />
		</div>
	{:then}
		{#if template.response != undefined}
			{@html template.response}
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
