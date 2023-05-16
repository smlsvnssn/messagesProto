<script>
	import MessageIcon from './MessageIcon.svelte'
	import { messages, activeMessageId } from './stuff'

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
	on:click={setAsActive}
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
				<svg
					width="16"
					height="17"
					viewBox="0 0 16 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.36781 6.37993L6.5007 5.85166L9.09672 11.4274C9.41597 11.9553 9.61907 12.0543 9.8563 11.9437C10.0932 11.8332 10.1476 11.6147 9.97256 11.093L6.62772 3.91147C6.06406 2.97917 5.45149 2.7712 4.56697 3.18366C3.68477 3.59504 3.45666 4.19086 3.79533 5.15828L7.15826 12.3719C8.23599 14.4173 9.43113 14.9835 10.9447 14.2777C12.4583 13.572 12.7927 12.2925 11.9307 10.1799L9.30309 4.54488L10.436 4.01661L13.0758 9.67946C14.1812 12.3862 13.6568 14.3923 11.473 15.4106C9.28913 16.429 7.41525 15.5412 6.03888 12.9273L2.63958 5.6306C2.06917 4.01599 2.55703 2.74169 4.0387 2.05077C5.51806 1.36094 6.81198 1.80023 7.72901 3.32397L11.1303 10.6263C11.5157 11.7515 11.2911 12.6538 10.3846 13.0765C9.47839 13.4991 8.64247 13.0919 7.99547 12.015L5.36781 6.37993Z"
						fill="#005AA0"
					/>
				</svg>
			{/if}
			{#if message.cases?.length}
				<span class="thread">{message.cases.length}</span>
			{/if}
		</p>
		<p class="header">{message.header}</p>
		<p>{message.content.replace(/(<([^>]+)>)/gi, '')}</p>
		{#if message.action}
			<a class="action" href={message.action.actionUrl} alt="dunno"
				>{message.action.actionText}</a
			>
		{/if}
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
				&.small {
					color: var(--gray);
				}
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
				align-items: baseline;

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

				svg {
					align-self: end;
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
				&.small {
					color: var(--white);
				}
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
