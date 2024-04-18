<script>
	export let checked = false
	export let color = '#2196F3'
</script>

<label class="switch">
	<input type="checkbox" bind:checked disabled={checked} />
	<span class="slider" />
</label>

<style>
	.switch {
		position: relative;
		display: block;
		width: 120px;
		height: 68px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--smoke);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 52px;
		width: 52px;
		left: 8px;
		bottom: 8px;
		background-color: white;
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: var(--blue);
	}

	input:checked + .slider {
		box-shadow: 0 0 1px var(--navy);
	}

	input:checked + .slider:before {
		transform: translateX(52px);
	}
</style>
