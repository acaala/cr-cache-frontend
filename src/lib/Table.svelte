<script>
    import { createEventDispatcher } from 'svelte';
    export let currentTime
    export let uncachedTime
    const dispatch = createEventDispatcher();

    const clearCache = () => {
        dispatch('clearCache')
    }
    const refetch = () => {
        dispatch('refetch')
    }
</script>
    <div class="lg:w-2/3 w-full overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800 rounded-tl rounded-bl">Title</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Uncached</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800">Current</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-gray-800"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="px-4 py-3">5000 Photos Api</td>
            <td class="px-4 py-3">{uncachedTime} ms</td>
          
            <td class="px-4 py-3 text-lg text-white">{currentTime} ms</td>
            <td class="px-4 py-3 text-lg text-white space-y-1">
                <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click="{clearCache}">Clear Cache</button>
                <button class="px-4 py-1  bg-gray-500 text-white rounded-lg hover:bg-gray-700" on:click="{refetch}">Refetch</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>