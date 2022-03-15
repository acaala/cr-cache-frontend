<script lang="ts">
    import { onMount } from "svelte";
    import { useApi } from '../hooks/api';

    let html: any

    onMount(async () => {
        html = await useApi('cr-home');
    })
</script>

<div>
    <div class="flex items-center text-white space-x-6">
        <div>
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">CR Homepage</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
        </div>
        {#if html}
        <p class="text-xl mb-0">Uncached: {html.uncachedHomePageTime} ms</p>
        <p class="text-xl mb-0">Current: {html.time} ms</p>
        {/if}

        <div>
            <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click={async () => {html = await useApi('cr-home-clear'); console.log(html)}} >Clear Cache</button>
            <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click={async () => {html = await useApi('cr-home'); console.log(html)}}>Refetch</button>
        </div>
    </div>

    {#if html}
        {@html html.response}
    {:else}
        <h2 class="text-white text-4xl mt-10">Loading</h2>
    {/if}
</div>