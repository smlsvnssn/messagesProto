<script>
	import autoAnimate from '@formkit/auto-animate'

	let checked = $state(true)
	let haveRetrievedAccount = $state(false)

	let modal

	$effect(() => console.log(modal))

	const openModal = () => modal.showModal()
	const closeModal = () => {
		modal.close()
		haveRetrievedAccount = true
	}
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
									<span>83683 - 123 456 789</span>
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
									<span>83683 - 987 654 321</span>
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
					<div
						class="custom-control extra-custom custom-checkbox mr-05 mb-05"
					>
						<input
							type="checkbox"
							class="custom-control-input"
							id="checkbox1"
						/>
						<label
							class="custom-control-label super-custom"
							for="checkbox1"
						>
							<p class="right">Hemförsäkring</p>
							<p><span><small>Per månad:</small></span> 684 kr</p>
						</label>
					</div>
					<div
						class="custom-control extra-custom custom-checkbox mr-05 mb-05"
					>
						<input
							type="checkbox"
							class="custom-control-input"
							id="checkbox2"
						/>
						<label
							class="custom-control-label super-custom"
							for="checkbox2"
						>
							<p class="right">Hundförsäkring</p>
							<p><span><small>Per månad:</small></span> 87 kr</p>
						</label>
					</div>
					<div
						class="custom-control extra-custom custom-checkbox mr-05 mb-05"
					>
						<input
							type="checkbox"
							class="custom-control-input"
							id="checkbox3"
						/>
						<label
							class="custom-control-label super-custom"
							for="checkbox3"
						>
							<p class="right">Båtförsäkring</p>
							<p><span><small>Per månad:</small></span> 219 kr</p>
						</label>
					</div>
					<div
						class="custom-control extra-custom custom-checkbox mr-05 mb-05"
					>
						<input
							type="checkbox"
							class="custom-control-input"
							id="checkbox4"
						/>
						<label
							class="custom-control-label super-custom"
							for="checkbox4"
						>
							<p class="right">Barnförsäkring</p>
							<p><span><small>Per månad:</small></span> 174 kr</p>
						</label>
					</div>
				</div>
			</form>
		{/if}
	</div>
</article>

<dialog bind:this={modal}>
	<h3>Anslut dina konton enkelt och säkert</h3>
	<p>Här händer det lite olika grejer.</p>
	<p>
		Du väljer vilken bank du har, ansluter till din bank, godkänner att
		hämta dina konton, och signerar med bankID.
	</p>
	<p>Det är några enkla steg.</p>

	<button
		onclick={closeModal}
		type="button"
		class="btn btn-primary btn-sm-block"
	>
		Ok, vi låstas att det blev gjort.
	</button>
</dialog>

<style lang="scss">
	article {
		flex: 1;
		padding: 2rem;
		gap: 2rem;
		background: var(--white);

		.wrapper {
			max-width: 600px;
			margin: auto;
			margin-top: 6rem;
		}

		.searchfield {
			display: flex;
			gap: 1rem;
		}

		.btn {
			width: auto !important;
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

	dialog {
		border-radius: 0.5rem;
		border: none;
		padding: 3rem;
		max-width: 30rem;
		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

		button {
			margin: auto;
			margin-top: 2rem;
			display: block !important;
		}

		&::backdrop {
			background: #0006;
			backdrop-filter: blur(0.5rem);
		}
	}
	dialog {
		transition:
			display .3s allow-discrete;
		animation: close .3s forwards;
		&[open] {
			animation: open .3s forwards;
		}
	}

	@keyframes open {
		from {
			opacity: 0;
			scale: .95;
			translate: 0 2rem;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes close {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
			scale: .95;
			translate: 0 2rem;
		}
	}
</style>
