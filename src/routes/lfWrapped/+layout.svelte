<script>
	import '../../style.css'
</script>

<svelte:head>
	<title>LF Wrapped 2025</title>
</svelte:head>

<main class="lb4">
	<slot />
</main>

<style lang="scss">
	:global(body) {
		--headerHeight: 0;
		background: linear-gradient(0deg, #001d3a 0%, #001d3a 100%) var(--tint) !important;
		height: calc(100svh - var(--headerHeight)) !important;
		inset: 0;
		position: absolute;

		margin-top: var(--headerHeight) !important;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}

	:global(.btn) {
		position: initial !important;
	}
	:global(p) {
		line-height: 1.35;
		color: var(--white);
	}
	main {
		height: 100vh;
		width: 100vw;

		background: linear-gradient(0deg, #001d3a 0%, #001d3a 100%) var(--tint) !important;

		display: grid;
		align-content: center;
		justify-content: center;
	}
</style>
