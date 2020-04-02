<script>
  import PluginIcon from "./PluginIcon";
  export let plugins;

  $: count = plugins.length;
</script>

<style>
  .plugins {
    display: flex;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<p>
  This web page displays a list of Blugin plugins (
  <strong>{count}</strong>
  plugins loaded)
</p>
<div class="plugins">
  {#each plugins as plugin}
    <PluginIcon {...plugin} />
  {/each}
</div>
