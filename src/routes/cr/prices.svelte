<script lang="ts">
    import Header from "$lib/Header.svelte";
    import { afterUpdate, onMount } from "svelte";
    import { useApi } from '../../hooks/api';
    let page = 'cr-prices';
    let html: any

    onMount(async () => {
        html = await useApi(page);
        console.log(html)
    })

    afterUpdate(() =>  {
        if(html != undefined && document.querySelector('.js-popup-stash-restriction')) {
            document.querySelector('.js-popup-stash-restriction').addEventListener('click', () => {
                if(document.querySelector('.js-promo-popup')) {
                    document.querySelector('.js-promo-popup').classList.add('hide');
                }
            })
        } 
    })
</script>

<div>
    {#if html}
        <Header time={html.time} uncachedTime={html.uncachedTime} on:refetch={async () => {html = await useApi(`${page}-clear`)}} on:clearCache={async () => {html = await useApi(page)}} />
        {@html html.response}
    {:else}
        <h2 class="text-white text-4xl mt-10">Loading</h2>
    {/if}
</div>