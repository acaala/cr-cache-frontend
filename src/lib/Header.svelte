<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    export let uncachedTime: any
    export let time: any
    const dispatch = createEventDispatcher();

    const refetch = () => {
        dispatch('refetch');
    }

    const clearCache = () => {
        dispatch('clearCache');
    }
</script>

<div class="flex items-center text-gray-800 space-x-6">
    <div>
        <a href="/" class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-800">CR Homepage</a>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
    </div>
    <p class="text-xl mb-0">Uncached: {uncachedTime} ms</p>
    <p class="text-xl mb-0">Current: {time} ms</p>
    <div>
        <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click={refetch} >Clear Cache</button>
        <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click={clearCache}>Refetch</button>
    </div>
</div>