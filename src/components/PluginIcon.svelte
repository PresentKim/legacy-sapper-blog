<script>
	export let name;
	export let fullname;
	export let img;
</script>

<style type="text/sass">
	.plugin{
		position: relative;
		width: 250px;
		height: 250px;
		margin: 20px 0 0 20px;
		display: block;
		padding: 0;
		border: 0;
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
		border-radius: 4px;
		border-bottom: 0;
		color: #ffffff;
		font-size: 25px;
		text-align: center;
		text-decoration: none;
		z-index: 3;
	}
	.plugin .image:before {
		background-color: #333333AA;
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
	}
	.plugin:hover .image:before {
		background-color: #33333333;
	}
	.plugin:hover {
    	text-shadow: 0 0 10px white, 0 0 20px black, 0 0 30px black, 0 0 70px black;
	}
	.plugin .image, .plugin .image img {
    	width: 100%;
    	height: 100%;
	}
</style>

<div class="plugin">
	<span class="image"><img alt="{fullname} icon" src={img} /></span>
	<a href="./plugins/{name}"> {name} </a>
</div>