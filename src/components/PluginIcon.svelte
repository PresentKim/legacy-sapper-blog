<script>
	export let name;
	export let fullname;
	export let description;
	export let img;
</script>

<style>
	.plugin{
		position: relative;
		width: 320px;
		height: 320px;
		margin: 2.5em 0 0 2.5em;
		display: block;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
	}
	.plugin a{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transition: background-color 0.5s ease, transform 0.5s ease;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 1em;
		border-radius: 4px;
		border-bottom: 0;
		color: #ffffff;
		text-align: center;
		text-decoration: none;
		z-index: 3;
	}
	.plugin .image:before {
		background-color: #f2849e;
		pointer-events: none;
		transition: background-color 0.5s ease, opacity 0.5s ease;
		content: '';
		display: block;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 1.0;
		z-index: 1;
		opacity: 0.8;
	}
	.plugin:hover .image:before {
		background-color: #333333;
		opacity: 0.35;
	}
	.plugin .image {
	    display: block;
    	width: 100%;
    	height: 100%;
	}
	.plugin .image img {
	    display: block;
    	width: 100%;
    	height: 100%;
	}
</style>

<div class="plugin">
	<span class="image"><img alt="{fullname} icon" src={img} /></span>
	<a href="./plugins/{name}">
		<h2>{name}</h2>
		<h2>{description}</h2>
	</a>
</div>