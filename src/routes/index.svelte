<script lang="ts">
	import JsCard from '$lib/JsCard.svelte';
	import PageCard from '$lib/PageCard.svelte';

	import { useApi } from '../hooks/api';

	let flushed: string;
	let clearCacheFor: string;
	let cacheCleared: boolean = false;
</script>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-1/2 w-full mb-6">
			<h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">CR Cache</h1>
			<div class="h-1 w-20 bg-indigo-500 rounded" />
		</div>
		<div class="flex flex-wrap -m-4">
			<PageCard title={'Home'} link={'/cr/home'} label={'cr-home'} />
			<PageCard title={'Prices'} link={'/cr/prices'} label={'cr-prices'} />
			<PageCard title={'News'} link={'/cr/news'} label={'cr-news'} />
			<PageCard title={'NFT'} link={'/cr/nft'} label={'cr-nft'} />
			<PageCard title={'Support'} link={'/cr/support'} label={'cr-support'} />
		</div>
	</div>
</section>

<section class="text-gray-600 body-font">
	<div class="container px-5 py-24 mx-auto">
		<div class="flex flex-wrap w-full mb-10 flex-col items-center text-center">
			<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Javascripts</h1>
		</div>
		<div class="flex flex-wrap -m-4">
			<JsCard title={'Main.js'} label={'js-main-info'} tag={'js-main'} />
			<JsCard title={'Landing.js'} label={'js-landing-info'} tag={'js-landing'} />
			<JsCard title={'Prices.js'} label={'js-prices-info'} tag={'js-prices'} />
		</div>
	</div>
</section>

<section>
	<div class="container mx-auto mb-4">
		<div class="flex flex-wrap w-full mb-10 flex-col items-center text-center ">
			<h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">Danger Zone</h1>
		</div>
		<div class="border border-red-600 px-4 shadow rounded-lg lg:w-1/2 lg:mx-auto mx-4">
			<div class="flex items-center border-b border-gray-200 pb-2 my-2 justify-between">
				<div>
					<h3 class="text-lg title-font font-medium text-gray-500 tracking-wider">Clear Cache</h3>
					<p class="text-gray-500">
						Clear For: <span
							><select bind:value={clearCacheFor} name="cache" id="cache">
								<optgroup label="Pages">
									<option value="cr-home">Home</option>
									<option value="cr-prices">Prices</option>
									<option value="cr-news">News</option>
									<option value="cr-nft">Nft</option>
									<option value="cr-supprt">Support</option>
								</optgroup>
								<optgroup label="Javascripts">
									<option value="js-main">Main.js</option>
									<option value="js-landing">Landing.js</option>
								</optgroup>
							</select></span
						>
					</p>
				</div>
				<div>
					<p class="text-red-500">{cacheCleared ? 'Cache Cleared' : ''}</p>
				</div>
				<button
					class="flex text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
					on:click={async () => {
						await useApi(`${clearCacheFor}-clear`);
						cacheCleared = true;
					}}>Clear Cache</button
				>
			</div>
			<div class="flex items-center border-b border-gray-200 py-2 my-2 justify-between">
				<div>
					<h3 class="text-lg title-font font-medium text-gray-500 tracking-wider">Flush All</h3>
					<p class="text-gray-500">Clear all cache from DB</p>
				</div>
				<div>
					<p class="text-red-500">{flushed ? flushed : ''}</p>
				</div>
				<button
					class="flex text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
					on:click={async () => (flushed = await useApi('flushAll'))}>Flush All</button
				>
			</div>
		</div>
	</div>
</section>
