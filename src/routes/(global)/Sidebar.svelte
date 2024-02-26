<script>
	import VillaIcon70 from '$lib/icons/VillaIcon70.svelte'
	import BåtIcon70 from '$lib/icons/BåtIcon70.svelte'

	import Section from '$lib/Section.svelte'
	import Row from '$lib/Row.svelte'
	import Sparkline from '$lib/messages/Sparkline.svelte'
	import lorem from 'loerem'

	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from '$lib/actions'

	import { isActiveSidebar } from '$lib/globals'

	const hidePane = () => ($isActiveSidebar = false)
</script>

<div class="background" transition:fade={{ duration: 200 }}>
	<aside
		class="sidebar"
		use:clickOutside
		on:clickoutside={hidePane}
		in:fly={{ x: 100, duration: 300, easing: backOut }}
		out:fly={{ x: 100, duration: 200, easing: sineOut }}
	>
		<div class="content">
			<div>
				<VillaIcon70 />
				<h1 class="display-2">Mitt bolån</h1>
			</div>
			<Section header="Försäkringar">
				<Row>
					<figure style:grid-column="span 6" class="hasIcon">
						<VillaIcon70 />
						<div>
							<h3>Villa-Hem</h3>
							<!-- <span class="marginbottom">
                            Skadenummer: 28-808329-21
                        </span> -->
							<figcaption>Självrisk: 2 000 kr</figcaption>
						</div>
					</figure>
					<figure class="r" style:grid-column="span 6">
						<h5 class="black">4 320 kr/år</h5>
						<span class="tagsy text-sm">Aktiv</span>
					</figure>
					<svelte:fragment slot="details">
						<p style:grid-column="span 4">
							Här finns det lite detaljer, för den som gillar
							detaljer.
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
				<Row>
					<figure style:grid-column="span 6" class="hasIcon">
						<BåtIcon70 />
						<div>
							<h3>Buster X 60hp - 70hp 2008</h3>
							<!-- <span class="marginbottom">
                            Skadenummer: 28-808329-21
                        </span> -->
							<figcaption>Självrisk: 2 500 kr</figcaption>
						</div>
					</figure>
					<figure class="r" style:grid-column="span 6">
						<h5 class="black">1 279 kr/år</h5>
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
					<h5 style:grid-column="span 4" class="hasIcon">
						Semester 2024
					</h5>
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
					<h5 style:grid-column="span 4" class="hasIcon">
						Barnens konto
					</h5>
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
						Den här raden innehåller bara rubrik och en liten text,
						och ligger nästan i mitten.
					</h3>
					<p style:grid-column="3 / span 7">{lorem()}</p>
					<a
						style:grid-column="3 / span 7"
						class="nav-link"
						href="/lfWrapped"
						><span class="text-truncate">LF Wrapped 2025</span>
					</a>
					<svelte:fragment slot="details">
						<p style:grid-column="span 10">Here be details</p>
					</svelte:fragment>
				</Row>
			</Section>
		</div>
	</aside>
</div>

<style lang="scss">
	.background {
		inset: 0;
		background: rgba(34, 34, 34, 0.25);
		position: fixed;
		z-index: 1;
		margin: calc(var(--headerHeight) + 3.375rem) auto 0;
	}

	.sidebar {
		position: absolute;
		right: 0;
		background: oklch(from var(--tint) l c h / 97%);
		padding: 6rem 4rem;
		z-index: 1;
		box-shadow:
			0px 1px 64px 0px rgba(0, 0, 0, 0.15),
			inset 0 1rem 1rem -1rem rgba(0, 0, 0, 0.25);

		backdrop-filter: blur(15px);

		overflow-y: scroll;
		height: calc(100vh - var(--headerHeight) - 3.375rem);

		.content {
			display: grid;
			gap: 1.5rem;

			width: 100%;
			max-width: 56rem;
		}

		width: 100%;
		max-width: calc(61rem + ((100vw - 1280px) / 2));
	}
</style>
