<script>
	import * as ö from 'ouml'
	import { tweened } from 'svelte/motion'
	import { cubicOut } from 'svelte/easing'
	import { onMount } from 'svelte'

	export let direction = 1

	const length = tweened(0, {
		duration: 500 + Math.random() * 1000,
		easing: cubicOut,
	})

	const linefont = (...values) =>
		String.fromCharCode(...values.map(v => ö.clamp(v, 0, 100) + 0x100))

	let sparkline = ''

	$: $length = sparkline.length

	onMount(
		() =>
			(sparkline = ö.pipe(
				ö.times(40, i =>
					ö.randomNormal(direction > 0 ? 30 + i : 70 - i, 25),
				),
				a => linefont(...a),
			)),
	)
</script>

<span class="linefont">
	{sparkline.substr(0, $length)}
</span>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Linefont:wdth,wght@35,300&display=swap');
	.linefont {
		font-family: Linefont;
		font-size: 0.875rem;
		line-height: 1;
		margin-right: 0.25rem;
		font-variation-settings: 'wdth' 75;
		text-align: left;
		display: inline-block;
		width: 2.75rem;
		//background: var(--tint);
		//border-top: 1px solid var(--tint);
		//border-bottom: 1px solid var(--tint);
	}
</style>
