<script>
	import Plugin from './Plugin';
	export let plugins;

	$: count = plugins.length;
</script>

<style>
	.plugins{
		display: flex;
		flex-wrap: wrap;
		margin: -2.5em 0 0 -2.5em;
	}
</style>

<p>This web page displays a list of Blugin plugins (<strong>{count}</strong> plugins loaded)</p>
<div class="plugins">
	{#each plugins as plugin}
		<Plugin {...plugin} />
	{/each}
</div>