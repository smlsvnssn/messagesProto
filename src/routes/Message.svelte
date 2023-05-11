<script>
	import MessageIcon from './MessageIcon.svelte'

	import { messages, activeMessageId } from './stuff'

	export let message

	const setAsActive = () => {
		$activeMessageId = $activeMessageId === message.id ? -1 : message.id
		$messages.find(m => m.id === $activeMessageId).isRead = true
		$messages = $messages //to refresh store
	}
</script>

<li
	class:unread={!message.isRead}
	class:active={message.id == $activeMessageId}
	on:click={setAsActive}
	on:keypress
>
	<MessageIcon {message} />
	<div class="content">
		<p class="small">
			{#if message.isImportant}
				<h6 class="importante">Viktigt</h6>
			{/if}
			{new Date(+message.dateSent).toLocaleDateString('sv-SE', {
				year: '2-digit',
				month: 'short',
				day: 'numeric',
			})}
		</p>
		<p class="header">{message.header}</p>
		<p>{message.content.replace(/(<([^>]+)>)/gi, '')}</p>
	</div>
	<div class="chevron">
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M8 5.91421L9.41421 4.5L17.1213 12.2071L9.41421 19.9142L8 18.5L14.2921 12.2071L8 5.91421Z"
				fill="#CCCCCC"
			/>
		</svg>
	</div>
</li>

<style lang="scss">
	li {
		padding: 1rem 0.5rem 1rem 1rem;
		border-bottom: 1px solid var(--shadow);
		font-size: 0.875rem;

		display: flex;
		gap: 1rem;

		list-style: none;
		transition: all 0.3s;

		.content {
			display: grid;
			gap: 0.25rem;
			p {
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				margin-bottom: 0;
				color: var(--gray);
				&.small {
					color: var(--gray);
				}
			}
			.header {
				color: var(--black);
			}

			.importante {
				display: inline-block;
				border-radius: 3rem;
				background: var(--wine);
				color: var(--white);
				padding: 1px 0.5rem 0;
				margin-right: 0.25rem;
				margin-bottom: 0;
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
		}
		&.active {
			background: var(--blue);
			.header {
				font-weight: 700;
				color: var(--white);
			}
			p {
				color: var(--white);
				&.small {
					color: var(--white);
				}
			}

			path {
				fill: var(--white);
			}
		}
		&:hover .chevron {
			transform: translateX(0.25rem);
		}
	}
</style>
