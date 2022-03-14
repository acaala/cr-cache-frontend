<script>
import { createEventDispatcher } from 'svelte';
    export let currentTime
    export let uncachedTime
    export let title
    const dispatch = createEventDispatcher();

    const clearCache = () => {
        dispatch('clearCache')
    }
    const refetch = () => {
        dispatch('refetch')
    }
</script>
<tr class="w-full">
    <td class="px-4 py-3">{title}</td>
    <td class="px-4 py-3">{uncachedTime} ms</td>
  
    <td class="px-4 py-3 text-lg text-white">{currentTime} ms</td>
    <td class="px-4 py-3 text-lg text-white space-y-1">
        <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click="{clearCache}">Clear Cache</button>
        <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click="{refetch}">Refetch</button>
    </td>
</tr>