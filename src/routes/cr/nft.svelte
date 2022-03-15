<script lang="ts">
    import Header from "$lib/Header.svelte";
    import { afterUpdate, onMount } from "svelte";
    import { useApi } from '../../hooks/api';
    import { hidePopup } from '../../hooks/cr'
    let page = 'cr-nft';
    let html: any

    onMount(async () => {
        html = await useApi(page);
        console.log(html)
    })

    afterUpdate(() =>  {
        hidePopup(html)
    })

</script>

<div class="w-full">
    {#if html}
        <Header time={html.time} uncachedTime={html.uncachedTime} on:refetch={async () => {html = await useApi(`${page}-clear`)}} on:clearCache={async () => {html = await useApi(page)}} />
        
        <div class="w-full">
            {@html html.response}
        </div> 
            
    {:else}
        <h2 class="text-white text-4xl mt-10">Loading</h2>
    {/if}
</div>