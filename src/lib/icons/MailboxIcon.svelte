<script>
	import { isNewMessageActive } from '../../routes/globals'
</script>

<div>
	<svg
		width="58"
		height="58"
		viewBox="0 0 58 58"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M41 0.0512695V6.05127H35V21.6899H33V15.0513L18.423 15.051C20.6032 16.7309 22 19.3178 22 22.2196V48.9483H56V22.2104C56 18.3008 53.0419 15.1809 49.2388 15.0552L49 15.0513H38V13.0513H49C54.0343 13.0513 58 17.1268 58 22.2104V50.9488L32 50.9483V57.9488H30V50.9483H28V57.9488H26V50.9483L0 50.9488V48.9488L20 48.9483V47.0513H7V25.0513H20V22.2196C20 18.3409 16.7356 15.1819 12.7452 15.0571L12.5 15.0533C8.39897 15.0533 5 18.2617 5 22.2196V47.0853H3V22.2196C3 17.2943 7.02414 13.2762 12.0724 13.0604L12.073 13.0513H33V0.0512695H41ZM19.8177 37.3407L9 28.2043V43.6353L14.2929 38.3442L15.7071 39.7584L10.414 45.0513H20V37.1233L19.8177 37.3407ZM20 27.0513H10.734L20 34.8763V27.0513ZM39 2.05127H35V4.05127H39V2.05127Z"
			fill="#005AA0"
		/>
	</svg>
	<p>
		Hej! Här hittar du meddelanden från oss. Du kan också ställa frågor
		direkt till oss, genom att skriva ett meddelande.
	</p>

	<button
		type="submit"
		class="btn btn-secondary btn-sm-block"
		on:click|stopPropagation={() => ($isNewMessageActive = true)}
	>
		<svg class="icon align-bottom" width="24" height="24">
			<use href="/assets/icons/24/icons.svg#pencil-24" />
		</svg>
		Skriv nytt meddelande
	</button>
</div>

<style lang="scss">
	div {
		inset: 0;
		margin: auto;
		position: absolute;
		max-width: 20rem;
		max-height: 20rem;
		text-align: center;

		p {
			margin-top: 1rem;
			font-size: 0.875rem;
			color: var(--gray);
		}
	}
</style>
