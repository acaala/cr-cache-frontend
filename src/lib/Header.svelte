<script lang="ts">
	import { useApi } from '../hooks/api';

	import { createEventDispatcher } from 'svelte';
	export let uncachedTime: any;
	export let time: any;
	export let size: any;
	export const response = undefined;
	const dispatch = createEventDispatcher();

	const refetch = () => {
		dispatch('refetch');
	};

	const clearCache = () => {
		dispatch('clearCache');
	};
	const flush = async () => {
		return await useApi('flushAll');
	};
</script>

<div class="flex items-center py-2 px-4 bg-gray-900 text-gray-200">
	<div class="w-1/3">
		<a
			href="/"
			class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white hover:text-gray-300"
			>CR Cache</a
		>
		<div class="h-1 w-20 bg-indigo-500 rounded" />
	</div>
	<div class="flex space-x-4 leading-relaxed w-1/3">
		<p class="title-font font-medium text-gray-400 mb-1">
			<span class="tracking-widest">Uncached: </span>{uncachedTime} ms
		</p>
		<p class="title-font font-medium text-gray-400 mb-1">
			<span class="tracking-widest">Current:</span>
			{time} ms
		</p>
		<p class="title-font font-medium text-gray-400 mb-1">
			<span class="tracking-widest">Size: </span>{size ? size : '-'} Bytes
		</p>
	</div>
	<div class="ml-auto">
		<button
			class="text-white bg-gray-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-600 rounded text-lg"
			on:click={refetch}>Clear Cache</button
		>
		<button
			class="text-white bg-gray-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-600 rounded text-lg"
			on:click={clearCache}>Refetch</button
		>
		<button
			class="text-white bg-red-500 border-0 py-1 px-5 focus:outline-none hover:bg-red-600 rounded text-lg"
			on:click={flush}>FlushAll</button
		>
	</div>
</div>
