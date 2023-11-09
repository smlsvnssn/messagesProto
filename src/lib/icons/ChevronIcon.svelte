<script>
	export let direction = 'right'
</script>

<svg
	style:rotate={direction === 'right'
		? '0deg'
		: direction === 'down'
		? '90deg'
		: direction === 'left'
		? '180deg'
		: '-90deg'}
	width="24"
	height="25"
	viewBox="0 0 24 25"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
>
	<path
		fill-rule="evenodd"
		clip-rule="evenodd"
		d="M8 5.91421L9.41421 4.5L17.1213 12.2071L9.41421 19.9142L8 18.5L14.2921 12.2071L8 5.91421Z"
	/>
</svg>

<style lang="scss">
	svg {
		//margin: -0.25rem;
	}
	path {
		//fill: var(--blue);
		fill: var(--silver);
	}
</style>
