<script>
	import autoAnimate from '@formkit/auto-animate'

 let {isReadMoreOpen = $bindable()} = $props()

	const toggleReadMore = () => (isReadMoreOpen = !isReadMoreOpen)
</script>

<div class="form-group readMoreWrapper" use:autoAnimate>
				<div class="custom-control custom-checkbox mr-1">
					<input
						type="checkbox"
						class="custom-control-input"
						id="buff"
					/>
					<label class="custom-control-label" for="buff">
						Ja, jag vill gärna få personligt anpassade erbjudanden
						och rabatter från LF, och samtycker därför till att mina
						uppgifter delas mellan Länsförsäkringar
						Fastighetsförmedling och Länsförsäkringsgruppen.
					</label>
				</div>
				<p class="samtycko">
					<button
						type="button"
						class="btn btn-more {isReadMoreOpen ? 'open' : ''}"
						onclick={toggleReadMore}>Vad innebär det här?</button
					>
				</p>
				{#if isReadMoreOpen}
					<div class="readMore">
						Syftet med att dela dina uppgifter mellan olika bolag i
						Länsförsäkringsgruppen är att kunna ge dig
						paketerbjudanden, personliga rabatter och rådgivning
						anpassad efter dina behov. Om du ger samtycke delas
						information om till exempel
						<ul>
							<li>dina avtalsengagemang hos Länsförsäkringar</li>
							<li>
								köp och försäljning av bostad (men inte
								lånelöftesbelopp)
							</li>
							<li>
								vilka budgivningar du deltagit i (men inte
								budade belopp)
							</li>
							<li>
								vilka sidor du visat intresse för på
								lansforsakringar.se och lansfast.se.
							</li>
						</ul>
						<p>
							Informationen delas mellan Länsförsäkringar
							Fastighetsförmedling och <a href="#">
								övriga bolag inom
								Länsförsäkringar
							</a>.
						</p>
						<p>
							Du kan när som helst återkalla ditt samtycke via
							dina inloggade kanaler på <a href="">lansforsakringar.se</a> eller
							<a href="">lansfast.se</a>. Läs mer om hur vi <a href="">
								behandlar
								personuppgifter
							</a>.
						</p>
					</div>
				{/if}
			</div>

<style lang="scss">

		.samtycko {
			margin-left: 1.75rem;
			margin-top: 0.5rem;
			margin-bottom: 0.5rem;

			button:after {
				transition: all 0.2s;
			}
			button.open:after {
				rotate: 180deg;
			}
		}

		.readMoreWrapper {
			transition: all 0.3s;
			outline: 0rem solid var(--white);
			overflow: hidden;

			&:has(.readMore) {
				outline: 0.75rem solid var(--cloud);
				border-radius: 0.01rem;
				background: var(--cloud);
				margin-bottom: 2rem;
			}

			.readMore {
				margin-left: 1.75rem;
			}
		}

		.form-group,
		.custom-control {
			margin-right: 0 !important;
		}

</style>

