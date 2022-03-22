<script>
	import { onMount } from 'svelte';

	console.log('Imported ITB');
	const initialize_itb_widget = () => {
		window['itbWidgetInit']({
			apiKey: 'Cw52L1w7SH3SLjjFQjKxq3n4EsMUg9wZ6EbjOhZP',
			options: {
				tokenId: 'BTC',
				loader: true,
				hideNavigator: true
			}
		});
	};
	onMount(initialize_itb_widget);
</script>

<svelte:head>
	<script src="https://app.intotheblock.com/widget.js" defer></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.commons.b36ec59f9f1f1e6cebf0.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.156.0b9d629055950c07f17b.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.25.346bcdfc95bd3a70f3a3.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.28.3d3d30bc135a507cd276.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.24.5188a1c43ae0deca1fa2.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.reactDom.89a6dade17d47ccae13a.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.vendors.57851b21d8e8fe8b25a0.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.3.7c23ae0a177e9e4da857.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.162.d25dd70cf65a50e14763.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.160.b9c141f1f61a433f09d6.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.163.f17e4dca7022a65799a4.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.168.ac9612d25c5a47a569bf.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.165.7c0976189cea8bb20e97.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.158.71a4046d7fed4e4035e1.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.166.00f81e6ee9cdde9ae2ee.js"></script>
	<script
		charset="utf-8"
		src="https://app.intotheblock.com/widget.200.5d51591769ff1cbf2ce1.js"></script>
</svelte:head>
