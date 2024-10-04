<script>
	import CustomRadio from './CustomRadio.svelte'
	import CustomCheckbox from './CustomCheckbox.svelte'
	import Samtycke from './Samtycke.svelte'
	import Dialog from './Dialog.svelte'

	import autoAnimate from '@formkit/auto-animate'

	let försäkringar = [
		{ f: 'Hemförsäkring', p: 684 },
		{ f: 'Hundförsäkring', p: 87 },
		{ f: 'Båtförsäkring', p: 219 },
		{ f: 'Barnförsäkring', p: 174 },
	]

	let haveRetrievedAccount = $state(true)

	let modal = $state()

	let valdaFörsäkringar = $state([])
	let total = $derived(valdaFörsäkringar.reduce((a, v) => +a + +v, 0))

	const openModal = () => modal.showModal()
	const closeModal = () => {
		modal.close()
		haveRetrievedAccount = true
	}
</script>

<article>
	<div class="wrapper">
		<div class="form-group" use:autoAnimate>
			<h3>
				Kontext: <br />Du är i ett köpflöde, och har valt att betala med
				autogiro.
			</h3>
			<br />

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
						<CustomRadio
							title="Privatkonto"
							sub="83683 - 123 456 789 - Swedbank"
							id="c1"
						/>
						<CustomRadio
							title="Sparkonto"
							sub="83683 - 987 654 321 - Swedbank"
							id="c2"
						/>
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
						class="custom-control-input"
						id="gnuff"
					/>
					<label class="custom-control-label" for="gnuff">
						Ja, spara mitt kontonummer för framtida in- och
						utbetalningar inom LF-gruppen
					</label>
				</div>
			</div>

			<hr />

			<label for="exampleInputEmail1">
				Vill du ansluta dina andra försäkringar till autogiro?
			</label>

			<p>Välj de försäkringar du vill ansluta till autogiro månadsvis:</p>

			<form>
				<div class="form-group">
					{#each försäkringar as { f, p }, id}
						<CustomCheckbox
							bind:group={valdaFörsäkringar}
							name={f}
							price={p}
							id={f + id}
						/>
					{/each}
				</div>
			</form>

			<p style="text-align:right; padding-right:.5rem">
				Totalt per månad: <b>{total} kr</b>
			</p>
			<hr />

			<Samtycke />

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

		.btn {
			width: auto !important;
		}

		.form-group,
		.custom-control {
			margin-right: 0 !important;
		}
	}
</style>
