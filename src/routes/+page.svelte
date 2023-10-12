<script>
	import { isSmallWindow } from './globals'
	import '../style.css'

	export const prerender = true
	let innerWidth

	$: $isSmallWindow = innerWidth < 800
</script>

<div class="wrapper">
	<div class="hero" />
	<article>
		<p />
		<p />
		<p />
		<p />
	</article>
</div>

<style lang="scss">
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
	.hero {
		height: 300px;
		width: 100%;
		background: url(/src/lib/images/hero_2x.jpg);
		background-size: cover;
	}
	article {
		flex: 1;
		padding: 2rem;
		display: grid;
		gap: 2rem;
		background: var(--white);

		p {
			margin: 0%;
			background: var(--tint);
			border-radius: 0.25rem;
		}
	}
</style>
