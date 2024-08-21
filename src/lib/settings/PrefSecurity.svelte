<script>
	import Switch from '$lib/Switch.svelte'
	import { globalState, panes } from '$lib/globals.svelte.js'
	
	let checked = $state()

	let svårlurad = $derived(checked ? 'Jag är svårlurad!' : 'Vill du bli svårlurad?')
</script>

<div class="wrapper">
	<div class="head">
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

		<h4 class="display-3">{svårlurad}</h4>
	</div>
	<p class="payoff">
		Bedrägerier över telefon och sms har blivit ett allt större
		samhällsproblem. Vi har byggt några extra säkerhetsfunktioner, som gör
		dig extra svårlurad. Slå på dessa funktioner för att få att starkt skydd
		mot bedrägerier!
	</p>
	<ul>
		<li>Vi skickar regelbundet quiz och utbildningsmaterial till dig.</li>
		<li>
			Vi lägger till extra skydd när du lägger till nya
			betalningsmottagare.
		</li>
		<li>
			Vi lägger till en fördröjning på betalningar och överföringar till
			nya betalningsmottagare.
		</li>
		<li>Vi lägger till extra kontroller när du skapar nytt bankID.</li>
		<li>Vi blockerar kortbetalningar utanför Sverige.</li>

		<li>
			Vi låter dig sätta en beloppsgräns för betalningar och överföringar.
		</li>
	</ul>

	<div class="head gap1">
		<p>
			<strong>OBSERVERA:</strong> För att stänga av denna funktion måste du
			kontakta kundservice. Därefter stängs funktionen av efter 24 timmar.
		</p>
		<Switch bind:checked />
		<p>
			{#if !checked}
				Ja tack, slå på extra säkerhetsfunktioner!
			{:else}
				Extra säkerhetsfunktioner påslagna. För att stänga av behöver du
				kontakta <a
					href="#"
					on:click|preventDefault|stopPropagation={() => {
						globalState.activePane = panes.newMessage
					}}>kundservice</a
				>.
			{/if}
		</p>
	</div>
</div>

<style lang="scss">
	.wrapper {
		container-type: inline-size;
		flex: 1 0 50%;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		padding: 2.5rem;
		position: relative;
		max-height: calc(100dvh - 9.375rem);
		overflow-y: auto;

		.head {
			display: flex;
			flex-direction: column;
			align-items: center;
		}

		.gap1 {
			gap: 1rem;
		}

		p,
		ul {
			margin-bottom: 0;
		}

		.display-3 {
			margin-top: 0.5rem;
			text-align: center;
		}
		ul {
			padding-left: 1rem;
		}
		li {
			margin-bottom: 1rem;
		}

		@media (max-width: 800px) {
			padding: 1.5rem;
		}
	}
</style>
