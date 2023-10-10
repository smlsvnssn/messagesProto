<script>
	import { isNewMessagePaneActive, isSmallWindow } from './globals'
	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from '$lib/actions'
	import CloseIcon from '../lib/icons/CloseIcon.svelte'
	import NewMessage from './NewMessage.svelte'
	import NewMessageIcon from '../lib/icons/NewMessageIcon.svelte'

	const hidePane = () => ($isNewMessagePaneActive = false)

	$: arrowXpos = `--x:${$isSmallWindow ? 8.25 : 8.25}rem;`
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
							<h4>Skriv ett meddelande till oss</h4>
						</li>
						<li
							on:click|stopPropagation={hidePane}
							title="Stäng meddelanden"
						>
							<CloseIcon />
						</li>
					</ul>
				</header>
				<div class="messagesBody">
					<article>
						<NewMessage />
					</article>
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.background {
		inset: 0;
		background: rgba(34, 34, 34, 0.25);
		position: fixed;
		margin: var(--headerHeight) auto 0;
	}
	.marginwrapper {
		max-width: calc(1140px);
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
			max-height: calc(100mvh - var(--headerHeight) - 1rem);

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
					gap: 0.75rem;

					li {
						&:first-child {
							flex: 1;
						}
						list-style: none;
						h4 {
							margin-bottom: 0;
							@media (max-width: 800px) {
								font-size: 1.125rem;
							}
						}
						h6 {
							margin-left: 0.25rem;
							display: inline;
						}
						a {
							display: flex;
							align-items: center;
							gap: 0.5rem;
							&:hover {
								background: none;
							}
						}
					}
				}
			}

			.messagesBody {
				display: flex;
				transition: transform 0.3s;
				min-height: 30rem;
				//@media (max-width: 800px) {
				//width: 200%;
				&.messageActive {
					transform: translateX(-50%);
				}
				//}
			}
		}
	}
	article {
		flex: 1;
		//background: var(--tint);
		padding: 2.5rem;
		position: relative;
		max-height: calc(100dvh - 9.375rem);
		overflow-y: auto;

		@media (max-width: 800px) {
			padding: 1.5rem;
		}
		@media (min-width: 800px) {
			.smallScreenBack {
				display: none;
			}
		}

		&.hasMessage {
			:global(figure.img img) {
				width: 100%;
				aspect-ratio: 3/2;
				object-fit: cover;
			}
			header {
				display: flex;
				align-items: baseline;
				gap: 0.5rem;
				padding-bottom: 0.5rem;
				margin-bottom: 1.5rem;
				border-bottom: 1px solid var(--shadow);

				&.isThreaded {
					margin-bottom: 0;
				}
				.category {
					display: inline;
				}
				.header {
					font-size: 0.875rem;
				}
				time {
					flex: 1 0 auto;
					color: var(--gray);
					font-size: 11px;
					text-align: end;
				}
			}
			a.action {
				display: block;
				width: fit-content;
				margin-top: 2rem;
			}

			// scroll shadow bottom
			-webkit-overflow-scrolling: touch;
			overflow-scrolling: touch;

			background: linear-gradient(rgba(255, 255, 255, 0), white 70%)
					center bottom,
				linear-gradient(hsla(0, 0%, 13%, 0), hsla(0, 0%, 13%, 0.1))
					bottom;

			background-repeat: no-repeat;
			background-size: 100% 100px, 100% 8px;
			background-attachment: local, scroll;
		}
	}
</style>
