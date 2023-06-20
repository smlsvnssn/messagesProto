<script>
	import { messages } from '../globals'
</script>

<aside />
<article>
	<p>
		Om det hade varit på riktigt hade det något att se här, men nu får du
		bara föreställa dig att du kommit till rätt ställe.
		<br /><br />
	</p>
	<p />
	<p />
	<p />
	<p />
	<p />
</article>

<style lang="scss">
	aside {
		flex: 0 1 260px;
		background: var(--blue);
		@media (max-width: 800px) {
			display: none;
		}
	}

	article {
		flex: 1;
		padding: 2rem;
		display: grid;
		gap: 2rem;
		background: var(--white);

		p {
			padding: 2rem;
			margin: 0%;
			background: var(--tint);
			border-radius: 0.25rem;
		}
	}
</style>
