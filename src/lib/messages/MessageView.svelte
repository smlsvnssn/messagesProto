<script>
	import ThreadedMessageView from './ThreadedMessageView.svelte'
	import NewMessage from './NewMessage.svelte'
	import Mailbox from '$lib/icons/MailboxIcon.svelte'
	import { activeMessageId, panes, activePane } from '$lib/globals'
	import * as ö from 'ouml'

	export let message
</script>

<article class:hasMessage={$activeMessageId > -1}>
	{#if message}
		<header class:isThreaded={typeof message.content !== 'string'}>
			{#if message.category}
				<h6 class="category">{message.category}</h6>
			{/if}
			<span class="header"><b>{ö.stripTags(message.header)}</b></span>
			<time>
				{new Date(+message.dateSent).toLocaleDateString('sv-SE', {
					month: 'short',
					day: 'numeric',
					hour: '2-digit',
					minute: '2-digit',
				})}
			</time>
		</header>

		{#if typeof message.content === 'string'}
			{@html message.content}
		{:else if message.content.length}
			<ThreadedMessageView
				threadedMessages={message.content}
				id={message.id}
			/>
		{:else}
			Oopsies! Det finns inget att se här.
		{/if}

		{#if message.action}
			<a
				href={message.action.actionUrl}
				class="action btn btn-primary btn-sm-block"
				on:click={() => ($activePane = panes.none)}
			>
				{message.action.actionText}
			</a>
		{/if}
	{:else}
		<Mailbox />
	{/if}
</article>

<style lang="scss">
	article {
		flex: 1;
		background: var(--tint);
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
