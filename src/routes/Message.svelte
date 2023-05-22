<script>
	import ChevronIcon from '../lib/icons/ChevronIcon.svelte'

	import AttachmentsIcon from '../lib/icons/AttachmentsIcon.svelte'

	import MessageIcon from '$lib/icons/MessageIcon.svelte'
	import { messages, activeMessageId } from './globals'

	export let message

	const setAsActive = () => {
		$activeMessageId = $activeMessageId === message.id ? -1 : message.id
		if ($activeMessageId > -1)
			$messages.find(m => m.id === $activeMessageId).isRead = true
		$messages = $messages //to refresh store
	}
</script>

<li
	class:unread={!message.isRead}
	class:active={message.id == $activeMessageId}
	on:click|stopPropagation={setAsActive}
	on:keypress
>
	<MessageIcon {message} />

	<div class="content">
		<p class="metadata">
			{#if message.isImportant}
				<h6 class="importante">Viktigt</h6>
			{/if}
			<date>
				{new Date(+message.dateSent).toLocaleDateString('sv-SE', {
					year: '2-digit',
					month: 'short',
					day: 'numeric',
				})}
			</date>
			{#if message.category}
				<h6>{message?.category}</h6>
			{/if}
			<span class="spacer" />
			{#if message.attachments.length}
				<AttachmentsIcon inverted={message.id == $activeMessageId} />
			{/if}
			{#if message.cases?.length}
				<span class="thread">{message.cases.length}</span>
			{/if}
		</p>
		<p class="header">{message.header.replace(/(<([^>]+)>)/gi, '')}</p>
		<p>{message.content.replace(/(<([^>]+)>)/gi, '')}</p>
		{#if message.action}
			<a class="action" href={message.action.actionUrl} alt="dunno"
				>{message.action.actionText}</a
			>
		{/if}
	</div>
	<div class="chevron">
		<ChevronIcon />
	</div>
</li>

<style lang="scss">
	li {
		padding: 1rem 0.5rem 1rem 1rem;
		border-bottom: 1px solid var(--shadow);
		font-size: 0.875rem;
		cursor: pointer;
		display: flex;
		gap: 1rem;

		list-style: none;
		transition: all 0.3s;

		&:not(.unread) .content .metadata .importante {
			background: var(--silver);
			color: var(--white);
		}

		.content {
			display: grid;
			gap: 0.25rem;
			width: 100%;
			p {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin-bottom: 0;
				color: var(--gray);
			}
			a {
				background: none;
				text-decoration: underline;
				padding-top: 0.25rem;
			}
			.metadata {
				font-size: 11px;
				display: flex;
				gap: 0.375rem;
				align-items: center;

				h6 {
					display: inline-block;
					margin: 0;
				}

				.importante {
					display: inline-block;
					border-radius: 3rem;
					background: var(--wine);
					color: var(--white);
					padding: 1px 0.5rem 0;
					margin-bottom: 0;
				}

				.spacer {
					flex: 1;
				}

				.thread {
					background: var(--tint);
					color: var(--gray);
					font-weight: bold;
					padding: 0.0625rem 0.1875rem;
					border-radius: 0.125rem;
				}
			}
			.header {
				color: var(--black);
			}
		}

		.chevron {
			flex: 1;
			display: grid;
			align-items: center;
			justify-items: end;
			transition: all 0.3s;
		}

		&.unread {
			background: var(--cloud);
			.header {
				font-weight: 700;
			}
			p {
				color: var(--black);
			}
			.metadata .thread {
				background: var(--blue);
				color: var(--white);
			}
		}
		&.active {
			background: var(--blue);
			.header {
				font-weight: 700;
				color: var(--white);
			}
			p,
			h6 {
				color: var(--white);
			}

			.metadata .thread {
				background: var(--tint);
				color: var(--gray);
			}

			path {
				fill: var(--white);
			}

			a {
				color: var(--white);
				&:hover {
					color: var(--cloud);
				}
			}
		}
		&:hover .chevron {
			transform: translateX(0.25rem);
		}
	}
</style>
