<script context="module">
export function preload({ params, query }) {
	return this.fetch(`plugins.json`).then(r => r.json()).then(plugins => {
		return { plugins };
	});
}
</script>

<script>
	import PluginList from '../components/PluginList.svelte';
	export let plugins;
</script>

<style>
	h1{
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Blugin - MC:BE plugin dev team</title>
</svelte:head>

<h1>Make plugin for MC:BE server software</h1>

<PluginList {plugins}/>