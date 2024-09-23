<script>
	import autoAnimate from '@formkit/auto-animate'
	import Listbox from '../Listbox.svelte'

	let checked = $state(false)
</script>

<article>
	<div class="wrapper" use:autoAnimate>
		<h2>Om din bostad</h2>
		<p>
			Innan du kan få ditt pris behöver vi lite information om ditt
			boende.
		</p>
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
		{:else}
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

		<h4>Välj viktiga saker</h4>
		<p>Välj så många viktiga saker du vill i listan.</p>
		<Listbox></Listbox>
	</div>
</article>

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
	}
</style>
