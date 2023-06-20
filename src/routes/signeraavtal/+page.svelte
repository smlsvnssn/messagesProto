<aside />
<article>
	<p />
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
			margin: 0%;
			background: var(--tint);
			border-radius: 0.25rem;
		}
	}
</style>
