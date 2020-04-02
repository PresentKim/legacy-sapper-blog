<script>
  export let orgName;
  export let fullname;

  import { onMount } from "svelte";
  import marked from "marked";
  let non = [];
  onMount(() => {
    loadReadme();
  });
  let url = `https://raw.githubusercontent.com/${orgName}/${fullname}/master/README.md`;
  let markdown = "";
  async function loadReadme() {
    const res = await fetch(url);
    const readme = await res.text();
    markdown = marked(readme);
  }
</script>

<div class="plugin">
  {@html markdown}
</div>
