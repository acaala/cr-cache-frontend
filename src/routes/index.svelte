<script lang="ts">
    import Table from '$lib/Table.svelte';
    import { onMount } from 'svelte';
    let photos: any;
    const apiURL = import.meta.env.VITE_API_URL;
    const getPhotos = async () => {
        photos = await fetch(`${apiURL}/cachePhotos`).then(r => r.json());
        console.log(photos)
    }
    const clearPhotosCache = async () => {
        photos = await fetch(`${apiURL}/clearCachePhotos`).then(r => r.json());
    }
    onMount(getPhotos)
</script>
<div class="text-gray-400 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">CR Cache</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>

            <div class="mt-4">
                <h2 class="title-font text-xl">Your Location:</h2>
                {#if photos && photos.geo}
                <div class="flex space-x-4">
                    <p>{photos.geo.city}</p>
                    <p>{photos.geo.country}</p>
                    <p>{photos.geo.region}</p>
                </div>
                {/if}
            </div>

            <div class="flex flex-col w-full mt-5 mb-1">
                <p class="lg:w-2/3 leading-relaxed text-base">Express js with Redis</p>
            </div>
        </div>
            {#if photos}
                <Table on:refetch={getPhotos} on:clearCache={clearPhotosCache} currentTime={photos.time} uncachedTime={photos.uncached}/>
            {/if}    
    </div>
</div>


