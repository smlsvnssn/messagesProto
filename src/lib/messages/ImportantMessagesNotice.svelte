<script>
	import { panes, activePane, isSmallWindow } from '$lib/globals'
	import { fly } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from '$lib/actions'
	import CloseIcon from '$lib/icons/CloseIcon.svelte'

	export let importantMessages

	const showMessagePane = () => ($activePane = panes.message)
	const hidePane = () => ($activePane = panes.none)

	const svenskify = n => {
		const t = [
			'noll',
			'ett',
			'två',
			'tre',
			'fyra',
			'fem',
			'sex',
			'sju',
			'åtta',
			'nio',
			'tio',
			'elva',
			'tolv',
		]
		return n >= 0 && n < t.length ? t[n] : n
	}

	$: arrowXpos = `--x:${$isSmallWindow ? 11.25 : 10.75}rem;`
</script>

<div
	class="messagePane"
	in:fly={{ y: -200, duration: 300, easing: backOut }}
	out:fly={{ y: -200, duration: 200, easing: sineOut }}
>
	<header
		class="messagesHeader"
		style={arrowXpos}
		use:clickOutside
		on:clickoutside={hidePane}
	>
		<h6 class="importante">Att göra</h6>
		{#if importantMessages.length === 1}
			<p>
				{@html importantMessages[0].header}
			</p>
			{#if importantMessages[0].action}
				<a
					href={importantMessages[0].action.actionUrl}
					on:click={hidePane}
					class="btn btn-secondary btn-sm-block"
				>
					{importantMessages[0].action.actionText}
				</a>
			{/if}
		{:else}
			<p>
				Du har {svenskify(importantMessages.length)} meddelanden som du behöver
				agera på innan <b>3:e juni</b>.
			</p>
			<a
				href="#"
				on:click|stopPropagation={showMessagePane}
				class="btn btn-secondary"
			>
				Läs meddelanden
			</a>
		{/if}
		<span class="close" on:click={hidePane}
			><CloseIcon isGray={true} /></span
		>
	</header>
</div>

<style lang="scss">
	.messagePane {
		--headerHeight: 3.75rem;

		max-width: 1280px;
		right: 0;
		top: var(--headerHeight);
		position: sticky;
		z-index: 1;

		margin: 0 auto;

		backdrop-filter: blur(10px);

		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));

		.messagesHeader {
			--x: 0;

			padding: 1rem;

			display: grid;
			gap: 0.75rem;
			justify-items: left;

			margin: 1rem 1rem;

			//background: var(--white);
			background: var(--white);
			border-radius: 4px;
			overflow: visible;
			max-height: calc(100dvh - --headerHeight - 1rem);
			max-width: 500px;
			min-width: 300px;

			position: absolute;
			//right: var(--x);
			right: 0;
			//transform: translateX(50%);

			@media (max-width: 800px) {
				margin: 0.5rem;
			}

			&:before {
				// arrow
				content: '';
				width: 0;
				height: 0;
				border-style: solid;
				border-width: 0 0.5rem 0.75rem 0.5rem;
				border-color: transparent transparent var(--white) transparent;
				position: absolute;
				top: -0.675rem;
				right: var(--x);
				@media (width < 800px) {
					top: -0.5rem;
				}
			}

			p {
				//color: var(--gray);
				//font-size: 0.875rem;
				margin-bottom: 0;
			}
			.importante {
				display: inline-block;
				border-radius: 3rem;
				background: var(--blue);
				color: var(--white);
				padding: 1px 0.5rem 0;
				margin: 0;
			}

			.close {
				position: absolute;
				right: 0.5rem;
				top: 0.5rem;
				list-style: none;
				cursor: pointer;
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.1);
				}
			}
		}
	}
</style>
