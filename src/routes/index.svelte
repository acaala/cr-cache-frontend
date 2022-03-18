
<script lang="ts">
import PageCard from "$lib/PageCard.svelte";

</script>
<section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="lg:w-1/2 w-full mb-6">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">CR Cache</h1>
          <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <div class="flex flex-wrap -m-4">
        <PageCard title={'Home'} link={'/cr/home'} label={'cr-home'}/>
        <PageCard title={'Prices'} link={'/cr/prices'} label={'cr-prices'}/>
        <PageCard title={'News'} link={'/cr/news'} label={'cr-news'}/>
        <PageCard title={'NFT'} link={'/cr/nft'} label={'cr-nft'} />
        <PageCard title={'Support'} link={'/cr/support'} label={'cr-support'} />
      </div>
  </div>
</section>

