<script>
	import { panes, activePane, isAvtalRedDotActive } from '$lib/globals'
	import { goto } from '$app/navigation'
</script>

<aside class="navbar navbar-stacked navbar-blue">
	<ul class="navbar-nav nav n-header-wrapper">
		<li class="nav-item lvl-1" on:click={() => goto('/')}>
			<button class="nav-link text-truncate w-100" data-test-id="start"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.004 4.24023L3 14.1812V28.4992H5V15.1692L16.004 6.75723L27 15.1692V28.4992H29V14.1812L16.004 4.24023Z"
						fill="white"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M11.9999 18.5091V28.5091H13.9999V20.5091H17.9999V28.5091H19.9999V18.5091H11.9999Z"
						fill="white"
					/>
				</svg>
				Översikt
			</button>
		</li>
		<li class="nav-item lvl-1" on:click={() => goto('/genericAction')}>
			<button class="nav-link text-truncate w-100" data-test-id="accounts"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M26.471 8.4837L25.225 2.7207L12.23 5.4287L6.77998 4.2587L4.00098 17.1047L7.82798 17.8897C7.98998 20.1187 9.83498 21.8877 12.105 21.8877C13.743 21.8877 15.154 20.9577 15.882 19.6087L25.23 21.6367L27.919 8.7947L26.471 8.4837ZM24.326 8.0237L23.69 5.0837L17.06 6.4647L24.326 8.0237ZM23.685 19.2557L16.404 17.6747C16.4044 17.6591 16.4067 17.6442 16.4089 17.6294L16.409 17.6293C16.4115 17.6127 16.414 17.5961 16.414 17.5787C16.414 15.2027 14.481 13.2697 12.105 13.2697C10.32 13.2697 8.78598 14.3607 8.13298 15.9107L6.38398 15.5517L8.31298 6.6337L25.554 10.3317L23.685 19.2557ZM12.105 19.8877C10.831 19.8877 9.79598 18.8527 9.79598 17.5787C9.79598 16.3057 10.831 15.2697 12.105 15.2697C13.378 15.2697 14.414 16.3057 14.414 17.5787C14.414 18.8527 13.378 19.8877 12.105 19.8877ZM16.2221 22.1673C14.2511 22.1673 12.6491 23.7693 12.6491 25.7403C12.6491 26.1053 12.6491 26.5993 12.8901 27.1203C13.0211 27.4773 13.2461 27.8313 13.4711 28.0503C14.1781 28.8763 15.1301 29.3133 16.2221 29.3133C18.1931 29.3133 19.7961 27.7103 19.7961 25.7403C19.7961 23.7693 18.1931 22.1673 16.2221 22.1673ZM16.2221 27.3133C15.7101 27.3133 15.3191 27.1343 14.9371 26.6933C14.8681 26.6243 14.7911 26.5033 14.7631 26.4193L14.7091 26.2893C14.6521 26.1733 14.6491 26.0133 14.6491 25.7403C14.6491 24.8873 15.3691 24.1673 16.2221 24.1673C17.0761 24.1673 17.7961 24.8873 17.7961 25.7403C17.7961 26.5923 17.0761 27.3133 16.2221 27.3133Z"
						fill="#fff"
					/>
				</svg>
				Bank</button
			>
		</li>

		<li class="nav-item lvl-1" on:click={() => goto('/genericAction')}>
			<button
				class="nav-link text-truncate w-100"
				data-test-id="insurances"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						d="M17 6.49902H15C10.4302 6.49902 6.13465 10.3531 5.19128 14.7352C6.5199 13.7276 8.20844 13.2263 10.0692 13.2263C12.3805 13.2263 14.5387 14.2881 16.0075 16.0224C17.4991 14.3225 19.7953 13.2263 22 13.2263C23.8785 13.2263 25.5113 13.699 26.789 14.6595C25.8029 10.3229 21.5061 6.49902 17 6.49902ZM29 18.0263H27C26.0429 16.0311 24.2409 15.2263 22 15.2263C20.1139 15.2263 18.0317 16.3718 17 18.0263H15C13.9683 16.3718 12.1327 15.2263 10.0692 15.2263C8.0057 15.2263 6.02813 16.0045 5 18.0263H3V16.499C3 10.499 8.5625 4.49902 15 4.49902H17C23.375 4.49902 29 10.499 29 16.499V18.0263Z"
						fill="white"
					/>
					<path
						d="M14.7912 27.5779C14.4852 28.0813 14.0397 28.4627 13.0079 28.4627C11.9762 28.4627 11.0734 27.5718 11.0734 26.4263H9.13889C9.13889 28.5899 10.8155 30.3717 13.0079 30.3717C14.9425 30.3717 17 28.9785 17 26.499C17 24.0195 15 26.499 15 26.499C15 26.499 15.0972 27.0745 14.7912 27.5779Z"
						fill="white"
					/>
					<path d="M15 16.499V26.499H17V16.499H15Z" fill="white" />
					<path d="M17 5.49902V2.49902H15V5.49902H17Z" fill="white" />
				</svg>
				Försäkringar</button
			>
		</li>
		<li class="nav-item lvl-1" on:click={() => goto('/fonttest')}>
			<button class="nav-link text-truncate w-100" data-test-id="pension"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="24"
					height="24"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.0241 3.49805L10.8321 12.498H21.2171L16.0241 3.49805ZM16.0241 7.50005L17.7541 10.498H14.2951L16.0241 7.50005ZM10.2551 13.498L6.2171 20.498H25.8321L21.7941 13.498H10.2551ZM11.4101 15.499H20.6381L22.3691 18.498H9.6801L11.4101 15.499ZM5.6401 21.498L1.6001 28.501L30.4481 28.499L26.4091 21.498H5.6401ZM6.7941 23.498H25.2531L26.9851 26.499L5.0631 26.501L6.7941 23.498Z"
						fill="white"
					/>
				</svg>
				Pension</button
			>
		</li>
		<li class="grow"></li>

		<li class="nav-item lvl-1" on:click={() => goto('/signeraavtal')}>
			<button class="nav-link text-truncate w-100" data-test-id="contact"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7 28.5V4.5H19.915L24.993 9.586L25 28.5H7ZM19.085 6.501H9V26.501H23L22.993 10.415L19.085 6.501Z"
						fill="white"
					/>
					<path d="M11 14.5H21V12.5H11V14.5Z" fill="white" />
					<path d="M11 18.5H21V16.5H11V18.5Z" fill="white" />
					<path d="M11 22.5H21V20.5H11V22.5Z" fill="white" />
				</svg>
				<span
					class="dot icon {$isAvtalRedDotActive ? 'red-dot' : (
						'no-dot'
					)}"
				/>

				Avtal och dokument
				<!-- <span
					class="dot {$isAvtalRedDotActive ? 'red-dot' : 'no-dot'}"
				/> -->
			</button>
		</li>
		<li
			class="nav-item lvl-1"
			on:click|stopPropagation={() => ($activePane = panes.newMessage)}
		>
			<button class="nav-link text-truncate w-100" data-test-id="contact"
				><svg
					width="32"
					height="32"
					viewBox="0 0 26 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						transform="translate(0,2)"
						d="M14.9744 19.1575C18.2235 18.4537 20.9597 15.5125 20.9597 10.1656C20.9597 9.16493 20.777 8.20962 20.4451 7.33526M18.9941 5.05106C17.56 3.50035 15.2189 2.78027 12.9691 2.78027C8.62335 2.78027 5.10041 6.3894 5.10041 10.8415C5.10041 12.0275 5.34511 13.3075 5.79937 14.1677C2.80111 14.8954 1.99805 12.29 1.99805 11.2752C1.99805 10.2604 2.54676 8.32185 5.40338 8.54366M10.1099 12.7708C10.6974 13.4556 11.5704 14.1677 12.9745 14.1677C14.3786 14.1677 15.2526 13.4751 15.8426 12.7708M20.2828 13.7708C22.9027 14.3131 23.9981 12.8359 23.9981 10.9492C23.9981 9.06249 22.6836 7.61594 19.8887 7.61594C17.0938 7.61594 14.8227 7.61594 14.509 7.61594C12.3345 7.61594 11.4519 7.56574 10.3254 5.60446M14.6966 19.2921C14.6966 20.2354 13.9318 21.0002 12.9885 21.0002C12.0451 21.0002 11.2804 20.2354 11.2804 19.2921C11.2804 18.3487 12.0451 17.5839 12.9885 17.5839C13.9318 17.5839 14.6966 18.3487 14.6966 19.2921Z"
						stroke="#fff"
						stroke-width="2"
					/>
				</svg>

				Kundservice</button
			>
		</li>
	</ul>
</aside>

<style lang="scss">
	aside {
		flex: 0 1;
		background: var(--navy);
		z-index: 1;
		@media (max-width: 800px) {
			display: none !important;
		}
	}
	.navbar-nav {
		display: flex !important;
		flex-direction: row;

		padding: 0 0.5rem;

		.nav-item {
			width: fit-content;

			button,
			a {
				font-size: 1rem !important;
				padding: 0 1rem 0 0.75rem !important;
				font-weight: 600;
			}
		}

		.grow {
			flex: 1 0;
		}
	}

	svg {
		scale: 75%;
		margin-right: 0.5rem !important;
	}

	article {
		flex: 1;
		padding: 2rem;
		display: grid;
		gap: 2rem;
		background: var(--white);

		p {
			margin: 0%;
			background: var(--tint);
			border-radius: 0.25rem;
		}
	}
	.dot {
		aspect-ratio: 1;
		background: var(--red);
		border-radius: 50%;
		position: relative;
		right: -2px;
		top: -0.5rem;
		transform: scale(1);
		transition: all 0.5s;
		width: 0.5rem;
		//border: 2px solid var(--white);

		&.icon {
			position: absolute;
			right: inherit;
			left: 2.125rem;
			top: 0.875rem;
		}
	}
	.no-dot {
		transform: scale(0);
	}
</style>
