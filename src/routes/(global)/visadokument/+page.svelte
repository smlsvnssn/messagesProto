<script>
	import { messages } from '$lib/globals.svelte.js'
</script>

<article>
	<p>
		Om det hade varit på riktigt hade det funnits ett dokument här, men nu
		får du föreställa dig det istället.
		<br /><br />
	</p>
</article>

<style lang="scss">
	article {
		flex: 1;
		padding: 2rem;
		display: grid !important;
		gap: 2rem;
		background: var(--white);

		p,
		div {
			padding: 2rem;
			margin: 0%;
			background: var(--tint);
			border-radius: 0.25rem;
		}
	}
</style>
