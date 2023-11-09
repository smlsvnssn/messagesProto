<script>
	import BåtIcon70 from '$lib/icons/BåtIcon70.svelte'
	import VillaIcon70 from '$lib/icons/VillaIcon70.svelte'
	import MoneyIcon from '$lib/icons/MoneyIcon.svelte'

	import Section from '$lib/Section.svelte'
	import Row from '$lib/Row.svelte'

	import { isSmallWindow } from '$lib/globals'
	import lorem from 'loerem'
	import Sparkline from '$lib/messages/Sparkline.svelte'
	import Treeview from '$lib/treemap/Treeview.svelte'
	export const prerender = true
	let innerWidth

	$: $isSmallWindow = innerWidth < 800
</script>

<div class="wrapper">
	<div class="hero" />
	<Section header="Min ekonomi">
		<Row>
			<div style:grid-column="span 13"><Treeview /></div>
		</Row>
		<Row>
			<h5 style:grid-column="span 4" class="hasIcon">
				<MoneyIcon />
				Semester 2024
			</h5>
			<figure style:grid-column="span 4" class="r">
				<figcaption>Tillgängligt</figcaption>
				42 000 000 kr
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Utveckling</figcaption>
				<span class="plus"><Sparkline /> +2.4&nbsp%</span>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Värde</figcaption>
				<strong>67 819 kr</strong>
			</figure>

			<svelte:fragment slot="details">
				<p style:grid-column="span 4">
					Här finns det lite detaljer, för den som gillar detaljer.
				</p>
				<p style:grid-column="span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
					0 kr
				</p>
				<p style:grid-column="span 2" class="r">
					<figcaption>Utveckling</figcaption>
					<span class="plus">+2.4&nbsp;%</span>
				</p>
				<p style:grid-column="span 2" class="r">
					<figcaption>Värde</figcaption>
					67 819 kr
				</p>
			</svelte:fragment>
		</Row>
		<Row url="genericAction">
			<h5 style:grid-column="span 4" class="hasIcon">
				<MoneyIcon />
				Framtiden
			</h5>
			<figure style:grid-column="span 4" class="r">
				<figcaption>Tillgängligt</figcaption>
				4 300 kr
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Utveckling</figcaption>
				<span class="minus">
					<Sparkline direction="-1" />
					-6.4&nbsp;%</span
				>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Värde</figcaption>
				<strong>819 452 kr</strong>
			</figure>
		</Row>
	</Section>

	<Section header="">
		<Row>
			<figure style:grid-column="span 6" class="hasIcon">
				<VillaIcon70 />
				<div>
					<h3>Villa-Hem</h3>

					<span class="marginbottom">
						Skadenummer: 28-808329-21
					</span>

					<figcaption>Självrisk: 2 000 kr</figcaption>
				</div>
			</figure>
			<figure class="r" style:grid-column="span 6">
				<h5 class="black">1 250 kr/år</h5>
				<span class="tagsy text-sm">Aktiv</span>
			</figure>
		</Row>
		<Row>
			<figure style:grid-column="span 6" class="hasIcon">
				<BåtIcon70 />
				<div>
					<h3>Buster X 60hp - 70hp 2008</h3>

					<span class="marginbottom">
						Skadenummer: 28-808329-21
					</span>

					<figcaption>Självrisk: 2 500 kr</figcaption>
				</div>
			</figure>
			<figure class="r" style:grid-column="span 6">
				<h5 class="black">2 150 kr/år</h5>
				<span class="tagsy text-sm">Aktiv</span>
			</figure>
		</Row>
	</Section>

	<Section header="Tabelltest">
		<Row type="tableheader">
			<figure style:grid-column="span 4">
				<figcaption>Konto</figcaption>
			</figure>
			<figure style:grid-column="span 4" class="r">
				<figcaption>Tillgängligt</figcaption>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Utveckling</figcaption>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Värde</figcaption>
			</figure>
		</Row>
		<Row type="tablerow">
			<h5 style:grid-column="span 4" class="hasIcon">Semester 2024</h5>
			<figure style:grid-column="span 4" class="r">
				<figcaption>Tillgängligt</figcaption>
				42 000 000 kr
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Utveckling</figcaption>
				<span class="plus">
					<Sparkline direction="1" />
					+2.4&nbsp;%</span
				>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Värde</figcaption>
				<strong>67 819 kr</strong>
			</figure>
			<svelte:fragment slot="details">
				<p style:grid-column="span 10">Here be details</p>
			</svelte:fragment>
		</Row>
		<Row type="tablerow">
			<h5 style:grid-column="span 4" class="hasIcon">Barnens konto</h5>
			<figure style:grid-column="span 4" class="r">
				<figcaption>Tillgängligt</figcaption>
				42 000 kr
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Utveckling</figcaption>
				<span class="minus">
					<Sparkline direction="-1" />
					-2.6&nbsp;%</span
				>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Värde</figcaption>
				<strong>27 361 419 kr</strong>
			</figure>
			<svelte:fragment slot="details">
				<p style:grid-column="span 10">Here be details</p>
			</svelte:fragment>
		</Row>
		<Row type="tablerow">
			<h5 style:grid-column="span 4" class="hasIcon">
				Hemliga schweiziska kontot
			</h5>
			<figure style:grid-column="span 4" class="r">
				<figcaption>Tillgängligt</figcaption>
				619 000 kr
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Utveckling</figcaption>
				<span class="plus">
					<Sparkline direction="1" />
					+3.2&nbsp;%</span
				>
			</figure>
			<figure style:grid-column="span 2" class="r">
				<figcaption>Värde</figcaption>
				<strong>619 412 422 kr</strong>
			</figure>
			<svelte:fragment slot="details">
				<p style:grid-column="span 10">Here be details</p>
			</svelte:fragment>
		</Row>
		<Row>
			<h3 class="hasIcon" style:grid-column="3 / span 7">
				Den här raden innehåller bara rubrik och en liten text, och
				ligger nästan i mitten.
			</h3>
			<p style:grid-column="3 / span 7">{lorem()}</p>
			<svelte:fragment slot="details">
				<p style:grid-column="span 10">Here be details</p>
			</svelte:fragment>
		</Row>
	</Section>
</div>

<style lang="scss">
	* {
		hyphens: auto;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		width: 100%;

		.hero {
			height: 300px;
			width: 100%;
			background: url(/src/lib/images/hero_2x.jpg);
			background-size: cover;
		}
		h4,
		h5,
		h6 {
			margin: 0;
		}
		h4,
		h6 {
			padding: 1rem 1.25rem;
			border-bottom: 2px solid var(--tint);
		}

		.details {
			margin-top: 1rem;
			margin: 1rem -0.75rem 0;
			background: var(--white);
			border-radius: 0.25rem;
			padding: 1.25rem 0.75rem;
		}

		.tagsy {
			padding: 0.25rem 1rem 0.25rem 1rem;
			background: var(--cloud);
			border-radius: 5rem;
			font-size: 0.875rem;
			margin-top: 0.25rem;
			display: inline-block;
			align-items: center;
			gap: 0.25rem;
			font-weight: normal;
		}

		.hasIcon {
			display: flex;
			align-items: center;
			gap: 1rem;
		}
		.r {
			text-align: right;

			@container (width < 500px) {
				text-align: left;
				display: flex;
				align-items: center;
				width: 100%;
				gap: 1rem;
				justify-content: space-between;
				//border-bottom: 1px solid var(--shadow);
			}
		}

		.h {
			height: 100%;
		}

		.black {
			color: var(--black);
		}

		.marginbottom {
			display: inline-block;
			margin-bottom: 0.5rem;
		}
		.plus {
			color: var(--green);
		}
		.minus {
			color: var(--wine);
		}

		figure {
			font-family: var(--font-family-sans-serif);
			font-weight: 300;
			margin-bottom: 0;
			font-size: 1.125rem;

			strong {
				font-weight: bold;
				margin-top: -0.125rem;
				display: inline-block;
			}
		}
		figcaption {
			font-family: var(--font-family-sans-serif);
			font-weight: 300;
			font-size: 1rem;
			line-height: 1.3;
		}
	}
</style>
