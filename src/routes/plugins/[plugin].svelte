<script context="module">
	export async function preload({ params }) {
		return this.fetch(`plugins/${params.plugin}.json`).then(res => {
			if(res.status === 200) return res.json();
			this.error(res.status, 'Not found');
		}).then(plugin =>{
			return { plugin };
		});
	}
</script>

<script>
	import PluginDescription from '../../components/PluginDescription';
	export let plugin;
</script>

<svelte:head>
	<title>{plugin.name}</title>
</svelte:head>

<PluginDescription orgName={plugin.orgName} fullname={plugin.fullname} />