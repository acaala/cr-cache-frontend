<script lang="ts">
    import TableRow from '$lib/TableRow.svelte';
    import TableSkel from '$lib/TableSkel.svelte';
    import { onMount } from 'svelte';
    import { useApi } from '../hooks/api'
    let photos: any;
    let posts: any;
    

    onMount(async () => {
      photos = await useApi('cachePhotos');
      posts = await useApi('cachePosts');

    })
</script>
<div class="text-gray-400 body-font">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">CR Cache</h1>
            <div class="h-1 w-20 bg-indigo-500 rounded"></div>
            <div class="mb-1">
                <p class="lg:w-2/3 text-xl leading-relaxed">Express js with Redis</p>
            </div>
            <div class="mt-4">
                <h2 class="title-font text-xl">Your Location:</h2>
                {#if photos && photos.geo}
                <div class="flex space-x-4">
                    <p>{photos.geo.city}</p>
                    <p>{photos.geo.country}</p>
                    <p>{photos.geo.region}</p>
                </div>
                {:else}
                <div class="flex space-x-4 mt-2">
                    <div class="h-2 w-8 bg-gray-500"></div>
                    <div class="h-2 w-8 bg-gray-500"></div>
                    <div class="h-2 w-8 bg-gray-500"></div>
                </div>
                {/if}
            </div>

           
        </div>
        <div class="lg:w-2/3 w-full overflow-auto">
            <table class="table- w-full text-left whitespace-no-wrap">
                <thead>
                <tr>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Title</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Uncached</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Current</th>
                    <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800"></th>
                </tr>
                </thead>
                <tbody> 
                    {#if photos }
                        <TableRow on:refetch={async () => {photos = await useApi('cachePhotos')}} on:clearCache={async () => {photos = await useApi('clearCachePhotos')}} title={'5000 Photos'} currentTime={photos.time} uncachedTime={photos.uncached}/>
                    {:else}
                        <TableSkel />
                    {/if}    
                    {#if posts}
                        <TableRow on:refetch={async () => {posts = await useApi('cachePosts')}} on:clearCache={async () => {posts = await useApi('clearCachePosts')}} title={'100 Posts'} currentTime={posts.time} uncachedTime={posts.uncached}/>
                    {:else}
                        <TableSkel />
                    {/if}    
                </tbody>
            </table>
        </div>
    </div>
</div>


