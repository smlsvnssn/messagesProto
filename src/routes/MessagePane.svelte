<script>
	import MessageView from './MessageView.svelte'
	import MessageList from './MessageList.svelte'
	import MessageActions from './MessageActions.svelte'
	import { messages, isMessagePaneActive, activeMessageId } from './stuff'
	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from './actions'

	const hidePane = () => ($isMessagePaneActive = false)

	$: unread = $messages.filter(m => !m.isRead).length
</script>

<div class="background" transition:fade={{ duration: 200 }}>
	<div class="marginwrapper">
		<div
			class="messagePane"
			in:fly={{ y: -200, duration: 300, easing: backOut }}
			out:fly={{ y: -200, duration: 200, easing: sineOut }}
		>
			<div class="content" use:clickOutside on:clickoutside={hidePane}>
				<header class="messagesHeader">
					<ul>
						<li>
							<h4>
								Dina meddelanden
								<h6>
									{unread || ''}
									{#if unread}
										Oläst{unread > 1 ? 'a' : ''}
									{/if}
								</h6>
							</h4>
						</li>
						<MessageActions />
					</ul>
				</header>
				<div class="messagesBody">
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
		margin: auto 1rem;
	}
	.messagePane {
		max-width: calc(1226px - 2rem);

		margin: 4.75rem auto;

		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

		.content {
			background: var(--white);
			border-radius: 4px;
			overflow: hidden;
			max-height: calc(100dvh - 5.75rem);

			.messagesHeader {
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
					top: -1rem;
					right: 15.1rem;
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
					}
				}
			}

			.messagesBody {
				display: flex;
			}
		}
	}
</style>
