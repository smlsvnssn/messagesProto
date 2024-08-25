<script>
	import BåtIcon70 from '$lib/icons/BåtIcon70.svelte'
	import VillaIcon70 from '$lib/icons/VillaIcon70.svelte'
	import SkadaIcon from '$lib/icons/SkadaIcon.svelte'
	import MoneyIcon from '$lib/icons/MoneyIcon.svelte'

	import Section from '$lib/Section.svelte'
	import Row from '$lib/Row.svelte'

	import { panes, isActiveSidebar, activePane, activeSettingsTab } from '$lib/globals.svelte.js'
	import lorem from 'loerem'
	import Sparkline from '$lib/messages/Sparkline.svelte'
	import Treeview from '$lib/treemap/Treeview.svelte'

	const activateSidebar = () => ($isActiveSidebar = true)
</script>

<div class="wrapper">
	<div class="main">
		<!-- <lf-alert variant="info" heading="I alert you">
			Yes I do
			<lf-button
				slot="end"
				variant="secondary"
				size="small"
				alert-action="close"
			>
				Custom close button
			</lf-button>
		</lf-alert> -->
		<Section header="">
			<Row>
				<div class="hasIcon" style="grid-column: span 1">
					<svg
						width="70"
						height="71"
						viewBox="0 0 70 71"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M22.7548 12.4863C21.8636 16.1423 18.656 19.35 15 20.2411V36.4863C15 44.7061 21.5303 51.9934 35 58.2843C48.4697 51.9934 55 44.7061 55 36.4863V20.2411C51.344 19.35 48.1364 16.1423 47.2452 12.4863H22.7548ZM49 10.4863C49 14.4863 53 18.4863 57 18.4863V36.4863C57 45.8197 49.6667 53.8197 35 60.4863C20.3333 53.8197 13 45.8197 13 36.4863V18.4863C17 18.4863 21 14.4863 21 10.4863H49ZM41.2929 26.0229L35 32.3153L28.7071 26.0229L27.2929 27.4371L33.585 33.7293L27.2929 40.0229L28.7071 41.4371L35 35.1443L41.2929 41.4371L42.7071 40.0229L36.414 33.7293L42.7071 27.4371L41.2929 26.0229Z"
							fill="#005AA0"
						/>
					</svg>
				</div>
				<div class="head" style="grid-column: span 8">
					<h3 class="display-4">Vill du bli svårlurad?</h3>
					<p class="payoff">
						Bedrägerier över telefon och sms har blivit ett allt
						större samhällsproblem. Vi har byggt några extra
						säkerhetsfunktioner, som gör dig extra svårlurad. Slå på
						dessa funktioner för att få att starkt skydd mot
						bedrägerier!
						<br />
					</p>
				</div>
				<a
					style="grid-column: span 3"
					href="#"
					class="btn btn-secondary btn-sm-block"
					on:click|preventDefault|stopPropagation={() => {
						$activePane = panes.settings
						$activeSettingsTab = 'security'
					}}
				>
					Bli svårlurad!
				</a>
			</Row>
		</Section>
		<Section header="Min ekonomi">
			<Row hasChevron={false}>
				<div style="grid-column: span 13"><Treeview /></div>
			</Row>
			<Row>
				<h5
					style="grid-column: span 4"
					class="hasIcon"
					on:click|stopPropagation={activateSidebar}
				>
					<MoneyIcon />
					Semester 2024
				</h5>
				<figure style="grid-column: span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
					42 000 000 kr
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Utveckling</figcaption>
					<span class="plus"><Sparkline /> +2.4&nbsp%</span>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Värde</figcaption>
					<strong>67 819 kr</strong>
				</figure>
				<svelte:fragment slot="details">
					<div style="grid-column: span 4">
						Här finns det lite detaljer, för den som gillar
						detaljer.
					</div>
					<div style="grid-column: span 4" class="r">
						<figcaption>Tillgängligt</figcaption>
						0 kr
					</div>
					<div style="grid-column: span 2" class="r">
						<figcaption>Utveckling</figcaption>
						<span class="plus">+2.4&nbsp;%</span>
					</div>
					<div style="grid-column: span 2" class="r">
						<figcaption>Värde</figcaption>
						67 819 kr
					</div>
				</svelte:fragment>
			</Row>
			<Row url="genericAction">
				<h5
					style="grid-column: span 4"
					class="hasIcon"
					on:click|stopPropagation={activateSidebar}
				>
					<MoneyIcon />
					Framtiden
				</h5>
				<figure style="grid-column: span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
					4 300 kr
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Utveckling</figcaption>
					<span class="minus">
						<Sparkline direction="-1" />
						-6.4&nbsp;%</span
					>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Värde</figcaption>
					<strong>819 452 kr</strong>
				</figure>
			</Row>
		</Section>
		<Section header="Försäkringar">
			<Row>
				<figure style="grid-column: span 6" class="hasIcon">
					<VillaIcon70 />
					<div>
						<h3>Villa-Hem</h3>
						<!-- <span class="marginbottom">
                            Skadenummer: 28-808329-21
                        </span> -->
						<figcaption>Självrisk: 2 000 kr</figcaption>
					</div>
				</figure>
				<figure class="r" style="grid-column: span 6">
					<h5 class="black">4 320 kr/år</h5>
					<span class="tagsy text-sm">Aktiv</span>
				</figure>
				<svelte:fragment slot="details">
					<div style="grid-column: span 4">
						Här finns det lite detaljer, för den som gillar
						detaljer.
					</div>
					<div style="grid-column: span 4" class="r">
						<figcaption>Tillgängligt</figcaption>
						0 kr
					</div>
					<div style="grid-column: span 2" class="r">
						<figcaption>Utveckling</figcaption>
						<span class="plus">+2.4&nbsp;%</span>
					</div>
					<div style="grid-column: span 2" class="r">
						<figcaption>Värde</figcaption>
						67 819 kr
					</div>
				</svelte:fragment>
			</Row>
			<Row>
				<figure style="grid-column: span 6" class="hasIcon">
					<BåtIcon70 />
					<div>
						<h3>Buster X 60hp - 70hp 2008</h3>
						<!-- <span class="marginbottom">
                            Skadenummer: 28-808329-21
                        </span> -->
						<figcaption>Självrisk: 2 500 kr</figcaption>
					</div>
				</figure>
				<figure class="r" style="grid-column: span 6">
					<h5 class="black">1 279 kr/år</h5>
					<span class="tagsy text-sm">Aktiv</span>
				</figure>
			</Row>
		</Section>
		<Section header="Tabelltest">
			<Row type="tableheader">
				<figure style="grid-column: span 4">
					<figcaption>Konto</figcaption>
				</figure>
				<figure style="grid-column: span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Utveckling</figcaption>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Värde</figcaption>
				</figure>
			</Row>
			<Row type="tablerow">
				<h5
					style="grid-column: span 4"
					class="hasIcon"
					on:click|stopPropagation={activateSidebar}
				>
					Semester 2024
				</h5>
				<figure style="grid-column: span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
					42 000 000 kr
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Utveckling</figcaption>
					<span class="plus">
						<Sparkline direction="1" />
						+2.4&nbsp;%</span
					>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Värde</figcaption>
					<strong>67 819 kr</strong>
				</figure>
				<svelte:fragment slot="details">
					<p style="grid-column: span 10">Here be details</p>
				</svelte:fragment>
			</Row>
			<Row type="tablerow">
				<h5
					style="grid-column: span 4"
					class="hasIcon"
					on:click|stopPropagation={activateSidebar}
				>
					Barnens konto
				</h5>
				<figure style="grid-column: span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
					42 000 kr
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Utveckling</figcaption>
					<span class="minus">
						<Sparkline direction="-1" />
						-2.6&nbsp;%</span
					>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Värde</figcaption>
					<strong>27 361 419 kr</strong>
				</figure>
				<svelte:fragment slot="details">
					<p style="grid-column: span 10">Here be details</p>
				</svelte:fragment>
			</Row>
			<Row type="tablerow">
				<h5
					style="grid-column: span 4"
					class="hasIcon"
					on:click|stopPropagation={activateSidebar}
				>
					Hemliga schweiziska kontot
				</h5>
				<figure style="grid-column: span 4" class="r">
					<figcaption>Tillgängligt</figcaption>
					619 000 kr
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Utveckling</figcaption>
					<span class="plus">
						<Sparkline direction="1" />
						+3.2&nbsp;%</span
					>
				</figure>
				<figure style="grid-column: span 2" class="r">
					<figcaption>Värde</figcaption>
					<strong>619 412 422 kr</strong>
				</figure>
				<svelte:fragment slot="details">
					<p style="grid-column: span 10">Here be details</p>
				</svelte:fragment>
			</Row>
			<Row>
				<h3 class="hasIcon" style:grid-column="3 / span 7">
					Den här raden innehåller bara rubrik och en liten text, och
					ligger nästan i mitten.
				</h3>
				<p style:grid-column="3 / span 7">{lorem()}</p>
				<a
					style:grid-column="3 / span 7"
					class="nav-link"
					href="/lfWrapped"
					><span class="text-truncate">LF Wrapped 2025</span>
				</a>
				<svelte:fragment slot="details">
					<p style="grid-column: span 10">Here be details</p>
				</svelte:fragment>
			</Row>
		</Section>
	</div>
	<aside class="aside">
		<Section header="Att tänka på:">
			<Row url="genericAction">
				<figure style="grid-column: span 12" class="hasIcon">
					<SkadaIcon />
					<div>
						<h5>Rensa stuprör</h5>
						<!-- <span class="marginbottom">
                                Skadenummer: 28-808329-21
                            </span> -->
						<figcaption>
							{lorem({ sentencesPerParagraph: 1 })}
						</figcaption>
					</div>
				</figure>
			</Row>
		</Section>

		<Section header="Viktig info">
			<Row url="genericAction">
				<figure style="grid-column: span 12" class="hasIcon">
					<SkadaIcon />
					<div>
						<h5>Tänk på y</h5>
						<!-- <span class="marginbottom">
                                Skadenummer: 28-808329-21
                            </span> -->
						<figcaption>
							{lorem({ sentencesPerParagraph: 1 })}
						</figcaption>
					</div>
				</figure>
			</Row>
		</Section>
	</aside>
</div>

<style lang="scss">
	* {
		hyphens: auto;
	}

	.wrapper {
		display: grid;
		grid: auto-flow / 8fr 3fr;
		width: 100%;

		padding: 2rem;
		gap: 2rem;

		.main,
		.aside {
			display: flex;
			flex-direction: column;
			gap: 2rem;
		}

		.payoff {
			margin-bottom: 0;
		}

		@media (width < 1000px) {
			grid: auto-flow / 1fr;
			padding: 0.5rem;
			gap: 0.5rem;

			.main,
			.aside {
				gap: 0.5rem;
			}
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

		input[list]::-webkit-calendar-picker-indicator {
			opacity: 0;
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
