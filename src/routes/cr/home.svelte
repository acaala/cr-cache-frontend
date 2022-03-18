<script lang="ts">
    import Header from "$lib/Header.svelte";
    import { onMount } from "svelte";
    import { useApi } from '../../hooks/api';
import Index from "../index.svelte";


    let html: any;

    onMount(async () => {
        html = await useApi('cr-home');
        console.log(html);
        loadScript();
    })
    const loadScript = () => {
      const script = document.createElement('script')
      script.src = 'https://development.coinrivet.com/wp-content/themes/coinrivet/assets/scripts/main.js?v=1.0.79';
      const secondScript = document.createElement('script');
      secondScript.src ='https://development.coinrivet.com/wp-content/themes/coinrivet/assets/scripts/landing.js?v=1.0.79';
    //   document.head.appendChild(script)
      document.head.appendChild(secondScript)
    }

    



</script>

<div>
    {#if html != undefined}
        <Header {...html} on:refetch={async () => {html = await useApi('cr-home-clear'); console.log(html)}} on:clearCache={async () => {html = await useApi('cr-home')}} />
        {@html html.response}

    {:else}
        <h2 class="text-gray-600 text-4xl mt-10">Loading</h2>
    {/if}

</div>

<style>
    .cr-landing__hero__img__primary__video-container {
        clip-path: none;
        -webkit-clip-path: none;
        position: relative;
    }

</style>