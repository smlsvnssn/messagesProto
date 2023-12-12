<script>
	import mat from '$lib/images/mat-mat.svg'
	import up from '$lib/images/arrow-growth-20.svg'
	import save from '$lib/images/produktillustrationer-mobil-spara-370-x-200.svg'
	import earth from '$lib/images/klimat-och-vder-hllbar-vrld.svg'
	import jul from '$lib/images/GOJUL.svg'
	import logo from '$lib/images/logotyp-page-1.svg'
	import { onMount } from 'svelte'

	let scroller,
		activeIndex = 0,
		numItems

	const checkScroll = () =>
		(activeIndex = Math.round(scroller.scrollLeft / scroller.clientWidth))
	const getNumItems = () =>
		(numItems = scroller.scrollWidth / scroller.clientWidth)

	onMount(() => {
		getNumItems()
		checkScroll()
	})
</script>

<nav>
	<a href="/" class="logo">
		<img class="mb" src={logo} alt="" />LF Wrapped 2025
	</a>
	<ul>
		{#each [...Array(numItems).keys()] as index}
			<li class:active={activeIndex === index}></li>
		{/each}
	</ul>
</nav>

<div class="wrapper" on:scroll={checkScroll} bind:this={scroller}>
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
	<article>
		<img class="mb" src={save} alt="" />
		<h5>Du har sparat</h5>
		<h1>34 319</h1>
		<h5>kronor i år</h5>
		<hr />
		<p>
			<img src={up} alt="" />
			<span>1.4%</span> mer än förra året
		</p>
		<button type="button" class="btn btn-secondary"
			>Starta ett fondkonto för sparandet</button
		>
	</article>
	<article>
		<img class="mb" src={earth} alt="" />
		<h5>Ditt sparande är</h5>
		<h1>17%</h1>
		<h5>hållbart</h5>
		<hr />
		<p>
			<img src={up} alt="" />
			<span>1.4%</span> mer än förra året
		</p>
		<hr />
		<p class="b">Här finns förbättringspotential!</p>
		<p>
			Hållbara fonder är inte bara bra för planeten, utan också för
			plånboken, enligt <a href="">MorningStar</a>,
			<a href="">Dagens Industri</a>, <a href="">Financial Times</a> och
			<a href="">FN</a>.
		</p>
		<button type="button" class="btn btn-secondary"
			>Hitta hållbara fonder</button
		>
	</article>
	<!-- <article>
		<img class="mb" src={mat} alt="" />
		<h5>genomfört</h5>
		<h1>367</h1>
		<h5>onödiga transaktioner</h5>
		<hr />
		<p>
			<img src={up} alt="" />
			<span>6.4%</span> fler än förra året
		</p>
		<hr />
		<p class="b">Här finns förbättringspotential!</p>
		<p>
			Hållbara fonder är inte bara bra för planeten, utan också för
			plånboken, enligt <a href="">MorningStar</a>,
			<a href="">Dagens Industri</a>, <a href="">Financial Times</a> och
			<a href="">FN</a>.
		</p>
		<button type="button" class="btn btn-secondary"
			>Hitta hållbara fonder</button
		>
	</article> -->
	<article>
		<img class="mb" src={jul} alt="" />
		<h5>Du har fått</h5>
		<h1>1 897</h1>
		<h5>kronor i återbäring</h5>
		<hr />
		<p>
			<img src={up} alt="" />
			<span>3.7%</span> mer än förra året
		</p>
		<hr />
		<h5>God jul och gott nytt år från oss på LF Halland. Vi ses!</h5>
		<button type="button" class="btn btn-secondary"
			>Sätt in återbäringen på sparkontot</button
		>
	</article>
</div>

<style lang="scss">
	* {
		hyphens: auto;
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
			background: none;
			text-decoration: none;

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
				list-style: none;
				transition: background 0.5s;

				&.active {
					background: #fff;
				}
			}
		}
	}

	.wrapper {
		display: flex;
		flex-direction: row;
		align-items: center;
		//max-width: 480px;
		min-height: 100vh;
		scroll-snap-type: x mandatory;
		overflow-y: scroll;

		img {
			max-width: 20rem;
			margin: auto;
			@media (width <= 450px) {
				max-width: 50%;
			}
		}

		article {
			flex: 1 0 100%;
			text-align: center;
			scroll-snap-align: center;
			padding: 2rem;
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
			@media (width <= 450px) {
				font-size: 1.125rem;
			}
		}

		h1 {
			font-size: 6rem;
			line-height: 1;
			@media (width <= 450px) {
				font-size: 3.5rem;
			}
		}

		p {
			max-width: 80%;
			font-family: Intro Cond;
			margin: auto;
		}

		a {
			color: var(--cloud);
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
			@media (width <= 450px) {
				margin: 2rem 0;
				padding: 1rem 2rem;
			}
		}

		span,
		.b {
			font-weight: 700;
		}

		.mb {
			margin-bottom: 3rem;
			@media (width <= 450px) {
				margin-bottom: 2rem;
			}
		}
	}
</style>
