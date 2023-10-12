<script>
	import { panes, activePane, isRedDotActive, isSmallWindow } from './globals'
	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from '$lib/actions'
	import { onMount } from 'svelte'
	import CloseIcon from '$lib/icons/CloseIcon.svelte'

	export let importantMessages
	export let isVisible = false

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

	onMount(() => (isVisible = true))

	$: arrowXpos = `--x:${$isSmallWindow ? 10.75 : 10.75}rem;`
</script>

{#if isVisible}
	<div class="marginwrapper">
		<div
			class="messagePane"
			in:fly={{ y: -200, duration: 300, easing: backOut }}
			out:fly={{ y: -200, duration: 200, easing: sineOut }}
		>
			<div class="content" use:clickOutside on:clickoutside={hidePane}>
				<header class="messagesHeader" style={arrowXpos}>
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
							Du har {svenskify(importantMessages.length)} meddelanden
							som du behöver agera på innan <b>3:e juni</b>.
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
		</div>
	</div>
{/if}

<style lang="scss">
	.marginwrapper {
		inset: 0;
		position: fixed;
		margin: var(--headerHeight) 1rem 1rem;
	}
	.messagePane {
		--headerHeight: 3.75rem;
		max-width: calc(1140px - 2rem);

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
				max-width: 400px;

				position: absolute;
				//right: var(--x);
				right: 0;
				//transform: translateX(50%);

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
					//@media (max-width: 800px) {
					right: var(--x);
					//}
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
	}
</style>
