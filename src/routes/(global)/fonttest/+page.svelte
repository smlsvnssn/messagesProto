<script>
	import { messages } from '$lib/globals'
	import lörem from 'loerem'
	import * as ö from 'ouml'
</script>

<ul>
	<li>Med: <br /><br /></li>
	<li>Utan:<br /><br /></li>
	{#each ö.times(15) as size}
		{@const l = lörem({ sentencesPerParagraph: 1 })}
		<li>
			<p style="--font-size: {size * 0.2 + 1}">
				{l}
			</p>
		</li>
		<li class="utan">
			<p style="--font-size: {size * 0.2 + 1}" class="utan">
				{l}
			</p>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		padding: 4rem;
		display: flex;
		column-gap: 4rem;
		background: var(--white);

		li {
			flex: 45%;
			list-style: none;
			&.utan p {
				letter-spacing: 0 !important;
			}
		}

		p {
			font-family: 'LF Rubrik';
			color: var(--navy);
			margin-bottom: 1em;
			--font-size: 1;
			font-size: calc(1rem * var(--font-size));
			letter-spacing: calc(
				(1 / pow(var(--font-size) + 1, 3)) * 0.4rem + 0.02em
			);
		}
	}
</style>
