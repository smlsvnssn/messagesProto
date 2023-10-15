<script>
	import EnvelopeIcon from '$lib/icons/EnvelopeIcon.svelte'
	import { panes, activePane, isRedDotActive } from './globals'

	const activateMessagePane = () =>
		($activePane =
			$activePane === panes.message ? panes.none : panes.message)
</script>

<button
	data-test-id="header-messages-menu-button"
	aria-haspopup="true"
	aria-expanded="false"
	role="button"
	on:click|stopPropagation={activateMessagePane}
>
	<span class="sr-only">Visa mina meddelanden</span>
	<EnvelopeIcon />
	<span class="dot {$isRedDotActive ? 'red-dot' : 'no-dot'}" />
</button>

<style lang="scss">
	button {
		position: relative;
		height: 100%;
		border: none;
		background: none;
		padding: 0.5rem;
		transition: all 0.5s;
		&:hover {
			background: var(--mist);
		}
	}
	.dot {
		aspect-ratio: 1;
		background: var(--red);
		border-radius: 50%;
		position: absolute;
		right: 6px;
		transform: scale(1);
		transition: all 0.5s;
		width: 0.5rem;
		//border: 2px solid var(--white);
	}
	.no-dot {
		transform: scale(0);
	}
	.red-dot {
		animation: 1s 1 ease-out blinko;
	}

	@keyframes blinko {
		0% {
			transform: translate(0) scale(0);
		}
		50% {
			transform: translate(2px, -4px) scale(0.5);
		}
		100% {
			transform: translate(0);
		}
	}
</style>
