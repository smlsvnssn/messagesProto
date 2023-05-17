<script>
	import { isMessagePaneActive, isRedDotActive, isSmallWindow } from './stuff'
	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from './actions'
	import { onMount } from 'svelte'

	export let messages

	export let isVisible = false

	const hidePane = () => (isVisible = false)

	const showMessagePane = () => {
		$isMessagePaneActive = true
		$isRedDotActive = false
		hidePane()
	}

	onMount(() => (isVisible = true))

	$: arrowXpos = `--x:${$isSmallWindow ? 11 : 15.125}rem;`
</script>

<div class="marginwrapper">
	{#if isVisible}
		<div
			class="messagePane"
			in:fly={{ y: -200, duration: 300, easing: backOut }}
			out:fly={{ y: -200, duration: 200, easing: sineOut }}
		>
			<div class="content" use:clickOutside on:clickoutside={hidePane}>
				<header class="messagesHeader" style={arrowXpos}>
					<h6 class="importante">Viktigt</h6>
					{#if messages.length === 1}
						<p>
							{@html messages[0].header}
						</p>
						{#if messages[0].action}
							<a href="#" class="btn btn-secondary btn-sm-block"
								>{messages[0].action.actionText}</a
							>
						{/if}
					{:else}
						<p>
							Du har {messages.length} viktiga meddelanden som du måste
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
				</header>
			</div>
		</div>
	{/if}
</div>

<style lang="scss">
	.marginwrapper {
		inset: 0;
		position: absolute;
		margin: auto 1rem;
	}
	.messagePane {
		--headerHeight: 3.75rem;
		max-width: calc(1226px - 2rem);

		margin: 1rem auto;

		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));

		.content {
			.messagesHeader {
				--x: 0;

				padding: 1rem;

				display: grid;
				gap: 0.75rem;
				justify-items: left;

				background: var(--white);
				border-radius: 4px;
				overflow: visible;
				max-height: calc(100dvh - --headerHeight - 1rem);
				max-width: 450px;

				position: absolute;
				right: var(--x);
				transform: translateX(50%);

				@media (max-width: 800px) {
					position: relative;
					width: 100%;
					max-width: 100%;
					right: 0;
					transform: translateX(0%);
				}

				&:before {
					// arrow
					content: '';
					width: 0;
					height: 0;
					border-style: solid;
					border-width: 0 0.5rem 1rem 0.5rem;
					border-color: transparent transparent var(--white)
						transparent;
					position: absolute;
					top: -0.875rem;
					right: 50%;
					@media (max-width: 800px) {
						right: var(--x);
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
					background: var(--wine);
					color: var(--white);
					padding: 1px 0.5rem 0;
					margin: 0;
				}
			}
		}
	}
</style>
