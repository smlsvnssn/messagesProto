<script>
	import * as ö from 'ouml'

	export let direction = 1

	const linefont = (...values) =>
		String.fromCharCode(
			...values.map(
				value => Math.floor(Math.min(Math.max(value, 0), 100)) + 0x100,
			),
		)

	let sparkline = ö.pipe(
		ö.times(40, i => ö.randomNormal(direction > 0 ? 30 + i : 70 - i, 25)),
		a => linefont(...a),
	)
</script>

<span class="linefont">
	{sparkline}
</span>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Linefont:wdth,wght@35,200&display=swap');
	.linefont {
		font-family: Linefont;
		font-size: 1rem;
		margin-right: 0.25rem;
		font-variation-settings: 'wdth' 75;
		//background: var(--tint);
		//border-top: 1px solid var(--tint);
		//border-bottom: 1px solid var(--tint);
	}
</style>
