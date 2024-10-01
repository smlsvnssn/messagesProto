<script>
	import Dialog from './Dialog.svelte'
	import autoAnimate from '@formkit/auto-animate'

	let försäkringar = [
		{ f: 'Hemförsäkring', p: 684 },
		{ f: 'Hundförsäkring', p: 87 },
		{ f: 'Båtförsäkring', p: 219 },
		{ f: 'Barnförsäkring', p: 174 },
	]

	let checked = $state(true)
	let isReadMoreOpen = $state(false)
	let haveRetrievedAccount = $state(false)

	let modal = $state(undefined)

	let choices = $state([])
	let total = $derived(choices.reduce((a, v) => a + v, 0))

	const openModal = () => modal.showModal()
	const closeModal = () => {
		modal.close()
		haveRetrievedAccount = true
	}

	const toggleReadMore = () => (isReadMoreOpen = !isReadMoreOpen)
</script>

<article>
	<div class="wrapper">
		<div class="form-group" use:autoAnimate>
			<label for="exampleInputEmail1">Dra pengarna från</label>
			{#if !haveRetrievedAccount}
				<p>
					Vi behöver ett bankkonto att dra pengarna från. <br />Anslut
					till din bank med BankID, och välj det konto du vill ansluta
					till autogiro.
				</p>
			{:else}
				<p>Välj det konto du vill ansluta till autogiro.</p>
				<form>
					<div class="form-group">
						<div>
							<div
								class="custom-control extra-custom custom-radio mr-05 mb-05"
							>
								<input
									id="radio1"
									name="radio"
									type="radio"
									checked
									class="custom-control-input"
								/>
								<label
									class="custom-control-label"
									for="radio1"
								>
									Privatkonto<br />
									<span>83683 - 123 456 789 - Swedbank</span>
								</label>
							</div>
						</div>
						<div>
							<div
								class="custom-control extra-custom custom-radio mr-05 mb-05"
							>
								<input
									id="radio2"
									name="radio"
									type="radio"
									class="custom-control-input"
								/>
								<label
									class="custom-control-label"
									for="radio2"
								>
									Sparkonto<br />
									<span>83683 - 987 654 321 - Swedbank</span>
								</label>
							</div>
						</div>
					</div>
				</form>
			{/if}
			<button
				type="submit"
				class="btn btn-secondary btn-sm-block"
				onclick={openModal}
			>
				<svg class="icon align-bottom" width="24" height="24">
					<use href="/lf-icons/sprite/24/icons.svg#bankid-24"></use>
				</svg>
				{#if !haveRetrievedAccount}
					Hämta konto hos min bank
				{:else}
					Hämta konto hos annan bank
				{/if}
			</button>
		</div>
		{#if haveRetrievedAccount}
			<div class="form-group">
				<div class="custom-control custom-checkbox mr-1">
					<input
						type="checkbox"
						bind:checked
						class="custom-control-input"
						id="gnuff"
					/>
					<label class="custom-control-label" for="gnuff">
						Ja, spara mitt kontonummer för framtida in-och
						utbetalningar inom LF-gruppen
					</label>
				</div>
			</div>
			<hr />
			<label for="exampleInputEmail1"
				>Vill du ansluta dina andra försäkringar till autogiro?</label
			>
			<p>Välj de försäkringar du vill ansluta till autogiro månadsvis:</p>
			<form>
				<div class="form-group">
					{#each försäkringar as { f, p }, i}
						<div
							class="custom-control extra-custom custom-checkbox mr-05 mb-05"
						>
							<input
								type="checkbox"
								class="custom-control-input"
								id="f{i}"
								value={p}
								bind:group={choices}
							/>
							<label
								class="custom-control-label super-custom"
								for="f{i}"
							>
								<p class="right">{f}</p>
								<p>
									<span><small>Per månad:</small></span>
									{p} kr
								</p>
							</label>
						</div>
					{/each}
				</div>
			</form>
			<p style="text-align:right; padding-right:.5rem">
				Totalt per månad: <b>{total} kr</b>
			</p>
			<hr />
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
			<button
				class="btn btn-primary btn-arrow btn-sm-block text-left float-right"
				onclick={() => (haveRetrievedAccount = !haveRetrievedAccount)}
			>
				Gå vidare
				<span class="d-block text-sm font-weight-normal font-base">
					och köp konserverad gröt
				</span>
			</button>
		{/if}
	</div>
</article>

<Dialog bind:modal {closeModal} />

<style lang="scss">
	article {
		flex: 1;
		padding: 2rem;
		gap: 2rem;
		background: var(--white);

		.wrapper {
			max-width: 600px;
			margin: 6rem auto 12rem;
		}

		.searchfield {
			display: flex;
			gap: 1rem;
		}

		.btn {
			width: auto !important;
		}

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

		.extra-custom {
			border: 2px solid var(--shadow);
			border-radius: 0.25rem;
			display: flex;

			transition: all 0.2s;

			&:has(input[type='checkbox']:checked),
			&:has(input[type='radio']:checked) {
				border: 2px solid var(--blue);
				background: var(--cloud);
			}

			&:hover {
				border: 2px solid var(--silver);

				label {
					border: none !important;
					background: none !important;
				}
			}

			label {
				padding: 0.5rem;
				display: block;
				width: 100%;

				&.super-custom {
					display: flex;
					gap: 1rem;

					p {
						margin-bottom: 0;

						&.right {
							flex-grow: 1;
						}
					}
				}

				span {
					color: var(--gray) !important;
				}
			}

			label:before,
			label:after {
				top: 0.5rem !important;
				left: 0.5rem !important;
			}

			input[type='radio'] {
				margin-left: 1rem;
			}
		}
	}
</style>
