<script lang="ts">
    import { useApi } from '../hooks/api';

    import { createEventDispatcher } from 'svelte';
    export let uncachedTime: any
    export let time: any
    export let size: any
    const dispatch = createEventDispatcher();

    const refetch = () => {
        dispatch('refetch');
    }

    const clearCache = () => {
        dispatch('clearCache');
    }
    const flush = async () => {
        return await useApi('flushAll');

    }
</script>

<div class="flex items-center p-2 bg-gray-900 text-gray-200">
    <div class="w-1/3">
        <a href="/" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white hover:text-gray-300">CR Homepage</a>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
    <div class="flex space-x-4 leading-relaxed w-1/3">
        <p class="text-lg mb-0 tracking-wide">Uncached: <span class="font-bold">{uncachedTime} ms</span></p>
        <p class="text-lg mb-0 tracking-wide">Current: <span class="font-bold">{time} ms</span></p>
        <p class="text-lg mb-0 tracking-wide">Size: <span class="font-bold">{size} Bytes</span></p>
    </div>
    <div class="w-1/3">
        <button class="px-4 py-2  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click={refetch} >Clear Cache</button>
        <button class="px-4 py-2  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click={clearCache}>Refetch</button>
        <button class="px-4 py-2  bg-red-500 text-white rounded-lg hover:bg-red-700" on:click={flush}>FlushAll</button>
    </div>
</div>