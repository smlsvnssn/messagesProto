<script>
	import mat from '$lib/images/mat-mat.svg'
	import up from '$lib/images/arrow-growth-20.svg'

	import { isSmallWindow } from '$lib/globals'

	export const prerender = true
	let innerWidth

	$: $isSmallWindow = innerWidth < 800
</script>

<div class="wrapper">
	<article>
		<img class="mb" src={mat} alt="" />
		<h5>Du har gjort</h5>
		<h1>68</h1>
		<h5>restaurangbesök</h5>
		<p>med ett snittpris på <span>674 kr</span></p>
		<hr />
		<p>
			<img src={up} alt="" />
			<span>6.4%</span> fler än förra året
		</p>
		<p class="b">Totalt: 33 186 kr</p>
		<button type="button" class="btn btn-secondary"
			>Hitta bra restauranger nära dig</button
		>
	</article>
</div>

<style lang="scss">
	* {
		hyphens: auto;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		img {
			max-width: 20rem;
			margin: auto;
		}

		article {
			text-align: center;
		}

		h1,
		h5,
		h6 {
			margin: 0;
			color: var(--white);
		}
		h5 {
			font-size: 1.25rem;
			margin-bottom: 0.25rem;
		}

		h1 {
			font-size: 6rem;
			line-height: 1;
		}

		p {
			font-family: Intro Cond;
			margin: 0;
		}

		hr {
			border: 0;
			margin: 1.5rem;
		}

		button {
			background: var(--white);
			padding: 1rem 3rem;
			border-radius: 0.5rem;
			margin: 3rem 0;
		}

		span,
		.b {
			font-weight: 700;
		}

		.mb {
			margin-bottom: 3rem;
		}
	}
</style>
