<script>
	import { types } from '../../routes/stuff'
	export let message
</script>

<div class="iconwrapper">
	<div class="icon">
		{#if message.type === types.massMessage}
			<svg
				width="16"
				height="16"
				viewBox="0 0 16 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5.70996 0V4.44112H11.5257V15.9668H15.9669V0H5.70996Z"
					fill="#005AA0"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M0 0.00012207V15.9669H10.2567V11.526H4.44097V0.00012207H0Z"
					fill="#005AA0"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M5.70996 10.2568H10.2568V5.70996H5.70996V10.2568Z"
					fill="#E30613"
				/>
			</svg>
		{:else if message.type === types.marketingMessage}
			{#if message.thumbnailImage}
				<img src={message.thumbnailImage} alt="" />
			{:else}
				<svg
					width="16"
					height="16"
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.70996 0V4.44112H11.5257V15.9668H15.9669V0H5.70996Z"
						fill="#005AA0"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M0 0.00012207V15.9669H10.2567V11.526H4.44097V0.00012207H0Z"
						fill="#005AA0"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M5.70996 10.2568H10.2568V5.70996H5.70996V10.2568Z"
						fill="#E30613"
					/>
				</svg>
			{/if}
		{:else if message.type === types.secureMessage}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M8.498 4C4.915 4 2 6.915 2 10.498C2 14.081 4.915 16.996 8.498 16.996H9.302L14 21.15V15H12V16.7L10.124 14.996H8.498C6.018 14.996 4 12.978 4 10.498C4 8.018 6.018 6 8.498 6H15.498C17.978 6 19.996 8.018 19.996 10.498C19.996 12.978 17.978 14.996 15.498 14.996V16.996C19.081 16.996 21.996 14.081 21.996 10.498C21.996 6.915 19.081 4 15.498 4H8.498Z"
					fill="#005AA0"
				/>
			</svg>
		{:else if message.type === types.notification}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M9.99994 4.17751V4C9.99994 2.89543 10.8954 2 11.9999 2C13.1045 2 13.9999 2.89543 13.9999 4V4.17751C17.2609 4.80445 18.9999 7.0801 18.9999 10.8127V14.7947L21.0164 19.5H14.9584C14.7204 20.9189 13.4864 22 11.9999 22C10.5134 22 9.27946 20.9189 9.04142 19.5H2.9834L4.99994 14.7947V10.8127C4.99994 7.0801 6.73897 4.80445 9.99994 4.17751ZM11.7421 19.5H12.8661C12.6932 19.7989 12.37 20 11.9999 20C11.6298 20 11.3066 19.7989 11.1337 19.5H11.7421ZM6.99994 10.8127V15.2053L6.01648 17.5H17.9834L16.9999 15.2053V10.8127C16.9999 7.49709 15.4546 6 11.9999 6C8.54525 6 6.99994 7.49709 6.99994 10.8127Z"
					fill="#005AA0"
				/>
			</svg>
		{:else if message.type === types.signDocument}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18.0158 2V6.01114H16.0158V4H4V19.9824H16.0158V17.9796H18.0158V21.9824H2V2H18.0158ZM18.9777 5.89533L22.6887 9.71118L15.2248 17.1751H11.3751L11.3478 13.4482L18.9777 5.89533ZM17.246 10.422L13.3539 14.2765L13.3605 15.1751H14.3964L18.197 11.373L17.246 10.422ZM18.9507 8.73623L18.313 9.367L19.258 10.312L19.8799 9.69162L18.9507 8.73623ZM7.67155 14.78C8.60016 15.3264 8.637 16.1808 8.21829 17.3351C8.90472 16.4211 9.2599 16.1128 9.95208 16.1128C10.4607 16.1128 10.8438 16.3907 11.0469 16.824C11.156 17.0568 11.1957 17.2441 11.2544 17.6499C11.2712 17.7661 11.2833 17.8428 11.294 17.9018H13.6267V19.4018H11.0477C10.5425 19.4018 10.1662 19.1204 9.96998 18.688C9.86693 18.4609 9.83081 18.2862 9.7721 17.8801C9.76706 17.8453 9.76433 17.8267 9.76168 17.809C9.6512 17.9367 9.493 18.1322 9.28744 18.4112C9.20173 18.5276 9.1611 18.5826 9.11302 18.6467C8.38737 19.614 7.88658 20.0177 7.0679 19.7623C6.41331 19.5581 6.16795 18.9951 6.2715 18.3577C6.32178 18.0483 6.37511 17.9029 6.66014 17.2027C6.71665 17.0639 6.75542 16.9658 6.79087 16.8707C7.00385 16.2995 6.99947 16.125 6.91092 16.0729C6.4968 15.8292 6.16997 16.2538 5.90149 18.2958L4.41429 18.1003C4.80103 15.1588 5.89643 13.7357 7.67155 14.78ZM13 8V10H5V8H13ZM13 5V7H5V5H13Z"
					fill="#005AA0"
				/>
			</svg>
		{:else if message.type === types.newDocument}
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M18 20V6.74173L15.5522 4H6V20H18ZM16.4478 2L20 5.97885V22H4V2H16.4478ZM16 13H8V15H16V13ZM16 10H8V12H16V10ZM14 7H8V9H14V7Z"
					fill="#005AA0"
				/>
			</svg>
		{:else}
			?
		{/if}
	</div>
</div>

<style lang="scss">
	.iconwrapper {
		flex: 0 0 2rem;

		.icon {
			width: 2rem;
			aspect-ratio: 1;
			border-radius: 50%;
			border: 1px solid var(--smoke);
			display: grid;
			align-items: center;
			justify-items: center;

			overflow: hidden;

			background: var(--white);
		}
	}
</style>
