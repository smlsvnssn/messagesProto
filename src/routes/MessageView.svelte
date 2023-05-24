<script>
	import NewMessage from './NewMessage.svelte'

	import Mailbox from '$lib/icons/MailboxIcon.svelte'
	import { isNewMessageActive } from './globals'

	export let message
</script>

<article class:hasMessage={message || $isNewMessageActive}>
	{#if message}
		<header>
			{#if message.category}
				<h6 class="category">{message.category}</h6>
			{/if}
			<span class="header"
				>{message.header.replace(/(<([^>]+)>)/gi, '')}</span
			>
			<time>
				{new Date(+message.dateSent).toLocaleDateString('sv-SE', {
					month: 'short',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
				})}
			</time>
		</header>
		{@html message.content}

		{#if message.action}
			<a
				href={message.action.actionUrl}
				class="action btn btn-primary btn-sm-block"
			>
				{message.action.actionText}
			</a>
		{/if}
	{:else if $isNewMessageActive}
		<NewMessage />
	{:else}
		<Mailbox />
	{/if}
</article>

<style lang="scss">
	article {
		flex: 1;
		background: var(--tint);
		padding: 3.5rem;
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
			header {
				display: flex;
				align-items: baseline;
				gap: 0.5rem;
				padding-bottom: 0.5rem;
				margin-bottom: 2rem;
				border-bottom: 1px solid var(--shadow);
				.category {
					display: inline;
				}
				.header {
					font-size: 0.875rem;
				}
				time {
					flex: 1;
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
