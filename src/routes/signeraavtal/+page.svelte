<script>
	import { messages } from '../globals'
</script>

<article>
	<p>
		Om det hade varit på riktigt hade det funnits ett gränssnitt för att
		signera här, men nu finns det bara en liten knapp.
		<br /><br />
		<a
			href="/"
			class="action btn btn-primary btn-sm-block"
			on:click={() => {
				$messages.find(
					m => m.id === 662, // hardcoded for demo
				).isRead = true
				$messages = $messages
			}}
		>
			Signera avtalet
		</a>
	</p>
	<p />
	<p />
	<p />
	<p />
	<p />
</article>

<style lang="scss">
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
