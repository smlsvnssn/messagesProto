<script>
	import '../../style.css'
	import logo from '$lib/images/logotyp-page-1.svg'
</script>

<svelte:head>
	<title>LF Wrapped 2025</title>
</svelte:head>
<nav>
	<a href="/" class="logo">
		<img class="mb" src={logo} alt="" />LF Wrapped 2025
	</a>
	<ul>
		<li></li>
		<li class="active"></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
		<li></li>
	</ul>
</nav>
<main class="lb4">
	<div class="fejkbody">
		<slot />
	</div>
</main>

<style lang="scss">
	:global(body) {
		background: linear-gradient(0deg, #001d3a 0%, #001d3a 100%) var(--tint) !important;
		height: calc(100svh - var(--headerHeight)) !important;
		inset: 0;
		position: absolute;

		margin-top: var(--headerHeight) !important;

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-rendering: optimizeLegibility;
	}
	a {
		text-decoration: none;
	}
	nav {
		position: absolute;
		margin: 2rem;
		width: calc(100% - 4rem);
		.logo {
			display: flex;
			align-items: center;
			gap: 0.5rem;
			color: #fff;

			font-family: LF Rubrik;
			font-size: 1.25rem;
			font-style: normal;
			font-weight: 400;
			line-height: 0.9375rem; /* 75% */
		}
		ul {
			display: flex;
			margin-top: 2rem;
			padding: 0;
			gap: 2px;
			justify-items: stretch;
			flex-direction: row;
			li {
				flex: 1;
				background: #fff8;
				height: 0.125rem;

				&.active {
					background: #fff;
				}
			}
		}
	}
	:global(.btn) {
		position: initial !important;
	}
	:global(p) {
		line-height: 1.35;
		color: var(--white);
	}
	main {
		height: 100dvh;
		display: grid;
		align-items: center;
		justify-items: center;
	}
	.fejkbody {
		max-width: 480px;
		margin: auto;
		display: flex;
		min-height: 700px;
		align-content: stretch;
	}
</style>
