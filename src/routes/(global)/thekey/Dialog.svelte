<script>
let {modal = $bindable(), closeModal} = $props()

</script>

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
	dialog {
		border-radius: 0.5rem;
		border: none;
		padding: 3rem;
		max-width: 30rem;
		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

		transition: display 0.3s allow-discrete;
		animation: close 0.3s forwards;

		&[open] {
			animation: open 0.3s forwards;
		}

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

	@keyframes open {
		from {
			opacity: 0;
			scale: 0.95;
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
			scale: 0.95;
			translate: 0 2rem;
		}
	}
</style>

