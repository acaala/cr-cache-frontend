<script lang="ts">
    import Header from "$lib/Header.svelte";
    import { onMount } from "svelte";
    import { useApi } from '../../hooks/api';

    let html: any

    onMount(async () => {
        html = await useApi('cr-home');
        console.log(html)
    })
</script>

<div>
 
    {#if html != undefined}
        <Header time={html.time} uncachedTime={html.uncachedTime} on:refetch={async () => {html = await useApi('cr-home-clear')}} on:clearCache={async () => {html = await useApi('cr-home')}} />
        {@html html.response}
    {:else}
        <h2 class="text-gray-600 text-4xl mt-10">Loading</h2>
    {/if}
</div>