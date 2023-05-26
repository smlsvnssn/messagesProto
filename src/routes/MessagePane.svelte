<script>
	import ArrowLeftIcon from '../lib/icons/ArrowLeftIcon.svelte'
	import MessageView from './MessageView.svelte'
	import MessageList from './MessageList.svelte'
	import MessageActions from './MessageActions.svelte'
	import {
		messages,
		isMessagePaneActive,
		activeMessageId,
		isSmallWindow,
	} from './globals'
	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from './actions'

	const hidePane = () => ($isMessagePaneActive = false)

	const setAsInactive = () => ($activeMessageId = -1)

	$: unread = $messages.filter(m => !m.isRead).length

	$: arrowXpos = `--x:${$isSmallWindow ? 11 : 15.125}rem;`
</script>

<div class="background" transition:fade={{ duration: 200 }}>
	<div class="marginwrapper">
		<div
			class="messagePane"
			in:fly={{ y: -200, duration: 300, easing: backOut }}
			out:fly={{ y: -200, duration: 200, easing: sineOut }}
		>
			<div class="content" use:clickOutside on:clickoutside={hidePane}>
				<header class="messagesHeader" style={arrowXpos}>
					<ul>
						<li>
							<h4>
								{#if /* $isSmallWindow && */ $activeMessageId > -1}
									<!-- TODO snygga till -->
									<a
										href="#"
										class="smallScreenBack"
										on:click|stopPropagation={setAsInactive}
									>
										<ArrowLeftIcon />
										Tillbaka
									</a>
								{:else}
									Dina meddelanden
									<h6>
										{unread || ''}
										{#if unread}
											Oläst{unread > 1 ? 'a' : ''}
										{/if}
									</h6>
								{/if}
							</h4>
						</li>
						<MessageActions />
					</ul>
				</header>
				<div
					class="messagesBody"
					class:messageActive={$activeMessageId > -1}
				>
					<MessageList />
					<MessageView
						message={$messages.find(m => m.id === $activeMessageId)}
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.background {
		inset: 0;
		background: rgba(34, 34, 34, 0.25);
		position: absolute;
	}
	.marginwrapper {
		max-width: calc(1226px);
		margin: auto;
		padding-left: 1rem;
	}
	.messagePane {
		--headerHeight: 3.75rem;
		max-width: calc(32rem);

		margin: 1rem 1rem 1rem auto;

		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

		.content {
			background: var(--white);
			border-radius: 4px;
			overflow: hidden;
			max-height: calc(100dvh - var(--headerHeight) - 1rem);

			.messagesHeader {
				--x: 0;
				box-shadow: 0 4px 4px rgba(34, 34, 34, 0.05);
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
					right: var(--x);
				}

				ul {
					margin: 0%;
					padding: 1rem;
					display: flex;
					gap: 1rem;

					li {
						&:first-child {
							flex: 1;
						}
						list-style: none;
						h4 {
							margin-bottom: 0;
						}
						h6 {
							margin-left: 0.25rem;
							display: inline;
						}
						a {
							text-align: baseline;
						}
					}
				}
			}

			.messagesBody {
				display: flex;
				transition: transform 0.3s;
				min-height: 30rem;
				//@media (max-width: 800px) {
				width: 200%;
				&.messageActive {
					transform: translateX(-50%);
				}
				//}
			}
		}
	}
</style>
