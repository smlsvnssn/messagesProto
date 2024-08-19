<script>
	import autoAnimate from '@formkit/auto-animate'

	let checked = $state(false)
</script>

<article use:autoAnimate>
	<h3>Om din bostad</h3>
	<p>Innan du kan få ditt pris behöver vi lite information om ditt boende.</p>
	{#if !checked}
		<div class="form-group">
			<label for="exampleInputEmail1">Bostadens adress</label>
			<input
				type="text"
				required=""
				class="form-control"
				id="exampleInputEmail1"
				aria-describedby="emailHelp1"
			/>
		</div>
	{/if}

	<div class="form-group">
		<div class="custom-control custom-checkbox mr-1">
			<input
				type="checkbox"
				bind:checked
				class="custom-control-input"
				id="checkbox3"
			/>
			<label class="custom-control-label" for="checkbox3"
				>Sök på fastighetsbeteckning</label
			>
		</div>
	</div>

	{#if checked}
		<div class="form-group">
			<label for="exampleInputEmail2">Fastighetsbeteckning</label>
			<div class="searchfield">
				<input
					type="text"
					pattern="[0-9]{(6, 8)}-?[0-9]{4}"
					required=""
					class="form-control"
					id="exampleInputEmail2"
					aria-describedby="emailHelp1"
				/>
				<a href="#" class="btn btn-secondary btn-sm-block">Sök</a>
			</div>
			<small class="text-muted form-text">
				Skriv utan kommun, exempelvis Traktnamn 13:3
			</small>
		</div>
	{/if}
</article>

<style lang="scss">
	article {
		flex: 1;
		padding: 2rem;
		gap: 2rem;
		background: var(--white);

		.searchfield {
			display: flex;
			gap: 1rem;
		}

		.btn {
			width: auto !important;
			padding: auto 8rem;
		}
	}
</style>
