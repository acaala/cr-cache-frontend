<script>
	import { useApi, loadScript } from '../hooks/api';
	import { onMount } from 'svelte';

	export let title;
	export let label;
	export let tag;
	let size;

	onMount(async () => {
		console.log(await useApi(label));
		size = await useApi(label);
	});
	const clearCache = async () => {
		await useApi(`${tag}-clear`);
		size = '-';
	};

	const fetch = async () => {
		size = await loadScript(tag, label);
	};
</script>

<div class="xl:w-1/3 md:w-1/2 p-4">
	<div class="border border-gray-200 p-6 rounded-lg">
		<div
			class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4"
		>
			<svg
				fill="none"
				stroke="currentColor"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				class="w-6 h-6"
				viewBox="0 0 24 24"
			>
				<path d="M22 12h-4l-3 9L9 3l-3 9H2" />
			</svg>
		</div>
		<h2 class="text-lg text-gray-900 font-medium title-font mb-2">{title}</h2>
		<div>
			<p class="text-xs title-font font-medium text-gray-400 mb-1">
				<span class="tracking-widest">Size: </span>{size ? size : '-'} Bytes
			</p>
			<!-- <button
				class="flex mt-4 text-white bg-gray-500 border-0 py-2 px-8 focus:outline-none hover:bg-gray-600 rounded text-lg"
				on:click={fetch}>Fetch</button
			>
			<button
				class="flex mt-4 text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
				on:click={clearCache}>Clear Cache</button
			> -->
		</div>
	</div>
</div>
