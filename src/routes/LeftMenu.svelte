<script>
	import { panes, activePane, isAvtalRedDotActive } from './globals'
	import { goto } from '$app/navigation'
</script>

<aside class="navbar navbar-stacked navbar-blue">
	<ul class="navbar-nav nav">
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
				Start
			</button>
		</li>
		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
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
				Konton och betalningar</button
			>
		</li>

		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
			<button class="nav-link text-truncate w-100" data-test-id="savings"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						d="M4.35654 12.3451C3.88068 11.8687 3.88068 11.0149 4.35817 10.5363L2.94233 9.12371C1.68582 10.3831 1.68582 12.5013 2.94274 13.7597C4.20343 15.0175 6.07926 14.8757 7.33665 13.6183L5.89614 12.3459C5.41953 12.8225 4.83507 12.8225 4.35654 12.3451Z"
						fill="white"
					/>
					<path
						d="M22.6033 22.87V26.5H20.6033V23.5H12.5936V26.5H10.6032V22.87C8.50474 21.8656 6.60325 19.343 6.60325 16.5C6.60325 13.3397 9.46178 10.4699 12.5936 10.5H19.0922C19.1268 10.4221 19.1554 9.5126 20.1043 8.5C21.0532 7.4874 21.5763 7.36181 22.6033 7.36181V11.1244C24.6033 11.7488 25.5095 13.2806 25.757 15.5H28.6033V17.5H25.671C25.6033 21.2794 24.0026 22.1832 22.6033 22.87ZM29.6033 19.5H30.6033V13.5H27.3702C27.0815 11.9417 25.9263 10.5 24.6033 9.93732V5.5C21.8433 5.5 20.7831 5.5 19.5818 6.5C18.499 7.40139 18.1959 7.97875 17.9641 8.5H12.6032C11.6945 8.51275 10.6424 8.70016 9.81472 9.02847C6.84293 10.2072 4.60325 13.2071 4.60325 16.5C4.60325 20.0927 6.37083 23.0733 8.60325 24.0348V28.5H14.6032V25.5H18.6033V28.5H24.6033V24.0348C26.6033 23.072 27.6631 21.0174 27.6651 19.5C27.6651 19.5 29.1033 19.5 29.6033 19.5Z"
						fill="white"
					/>
				</svg>
				Spara och placera</button
			>
		</li>

		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
			<button class="nav-link text-truncate w-100" data-test-id="card"
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
						d="M26.803 23.187C26.616 23.388 26.332 23.499 26.004 23.499H6.015C5.493 23.499 5 23.058 5 22.59V14.499H26.995L26.996 22.662C27.014 22.906 26.901 23.082 26.803 23.187ZM6.015 9.49902H26.004C26.306 9.49902 26.603 9.62402 26.797 9.83302C26.879 9.92002 27.013 10.103 26.994 10.408V12.499H5V10.408C5 9.94102 5.493 9.49902 6.015 9.49902ZM28.991 10.479C29.044 9.74602 28.785 9.03202 28.261 8.47002C27.687 7.85302 26.865 7.49902 26.004 7.49902H6.015C4.381 7.49902 3 8.83202 3 10.408V22.59C3 24.167 4.381 25.5 6.015 25.5H26.004C26.88 25.5 27.705 25.153 28.267 24.549C28.788 23.99 29.045 23.269 28.994 22.59L28.991 10.479Z"
						fill="#fff"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M6.9943 18.4995H12.9943V16.4995H6.9943V18.4995Z"
						fill="#fff"
					/>
				</svg>
				Kort</button
			>
		</li>

		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
			<button class="nav-link text-truncate w-100" data-test-id="loan"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						d="M26.4083 14.764L23.7705 2.22754L3 6.64695L5.72267 19.1823L15.8889 16.9685L15.4634 15.0143L7.25914 16.8246L5.3993 8.18121L22.2326 4.63201L24.0755 13.2093L20.8091 13.8937L21.2192 15.8512L26.4083 14.764Z"
						fill="#fff"
					/>
					<path
						d="M22.5178 14.7525C22.5178 12.6814 20.8389 11.0025 18.7678 11.0025C16.6967 11.0025 15.0178 12.6814 15.0178 14.7525C15.0178 16.8235 16.6967 18.5025 18.7678 18.5025C20.8389 18.5025 22.5178 16.8235 22.5178 14.7525ZM17.0178 14.7525C17.0178 13.786 17.8013 13.0025 18.7678 13.0025C19.7343 13.0025 20.5178 13.786 20.5178 14.7525C20.5178 15.719 19.7343 16.5025 18.7678 16.5025C17.8013 16.5025 17.0178 15.719 17.0178 14.7525Z"
						fill="#fff"
					/>
					<path
						d="M27.5178 21.7525C27.5178 19.9575 26.0627 18.5025 24.2678 18.5025C22.4729 18.5025 21.0178 19.9575 21.0178 21.7525C21.0178 23.5474 22.4729 25.0025 24.2678 25.0025C26.0627 25.0025 27.5178 23.5474 27.5178 21.7525ZM23.0178 21.7525C23.0178 21.0621 23.5774 20.5025 24.2678 20.5025C24.9581 20.5025 25.5178 21.0621 25.5178 21.7525C25.5178 22.4428 24.9581 23.0025 24.2678 23.0025C23.5774 23.0025 23.0178 22.4428 23.0178 21.7525Z"
						fill="#fff"
					/>
					<path
						d="M20.0178 24.6902L13.0178 19.2346L6.01779 24.6902V30.5025H8.01779V25.7725L13.0178 21.7758L18.0178 25.7725V30.5025H20.0178V24.6902Z"
						fill="#fff"
					/>
					<path
						d="M12.0178 30.5025H14.0178V26.5025H12.0178V30.5025Z"
						fill="#fff"
					/>
				</svg>
				Lån</button
			>
		</li>
		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
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
		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
			<button class="nav-link text-truncate w-100" data-test-id="pension"
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
						d="M16.0241 3.49805L10.8321 12.498H21.2171L16.0241 3.49805ZM16.0241 7.50005L17.7541 10.498H14.2951L16.0241 7.50005ZM10.2551 13.498L6.2171 20.498H25.8321L21.7941 13.498H10.2551ZM11.4101 15.499H20.6381L22.3691 18.498H9.6801L11.4101 15.499ZM5.6401 21.498L1.6001 28.501L30.4481 28.499L26.4091 21.498H5.6401ZM6.7941 23.498H25.2531L26.9851 26.499L5.0631 26.501L6.7941 23.498Z"
						fill="white"
					/>
				</svg>
				Pension</button
			>
		</li>
		<li class="nav-item lvl-1" on:click={() => goto('genericAction')}>
			<button class="nav-link text-truncate w-100" data-test-id="contact"
				><svg
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<g clip-path="url(#clip0_1550_8632)">
						<mask
							id="mask0_1550_8632"
							style="mask-type:alpha"
							maskUnits="userSpaceOnUse"
							x="5"
							y="5"
							width="22"
							height="23"
						>
							<path
								d="M11.9314 26.7465L12.4002 26.169C15.5875 27.0655 19.0951 25.9036 21.2346 23.2884C24.0974 19.7711 23.6065 14.4554 20.0081 11.5101L19.3536 11.0192L22.3291 7.53362L22.9314 7.986C25.493 10.021 27 13.1093 27 16.5C27 22.6022 22.1022 27.5 16 27.5C14.6442 27.5 13.2871 27.2745 11.9314 26.7465ZM9.14425 25.0896C6.507 22.979 5 19.8151 5 16.5C5 10.3977 9.89775 5.5 16 5.5C17.5826 5.5 19.0883 5.80112 20.4454 6.479L19.949 7.02625C16.528 5.962 12.9062 6.93275 10.6829 9.71025C7.82013 13.31 8.3935 18.4635 11.9919 21.4899L12.6464 21.9807L9.67088 25.5406L9.14425 25.0896Z"
								fill="white"
							/>
						</mask>
						<g mask="url(#mask0_1550_8632)">
							<path
								d="M11.9314 26.7465L12.4002 26.169C15.5875 27.0655 19.0951 25.9036 21.2346 23.2884C24.0974 19.7711 23.6065 14.4554 20.0081 11.5101L19.3536 11.0192L22.3291 7.53362L22.9314 7.986C25.493 10.021 27 13.1093 27 16.5C27 22.6022 22.1022 27.5 16 27.5C14.6442 27.5 13.2871 27.2745 11.9314 26.7465ZM9.14425 25.0896C6.507 22.979 5 19.8151 5 16.5C5 10.3977 9.89775 5.5 16 5.5C17.5826 5.5 19.0883 5.80112 20.4454 6.479L19.949 7.02625C16.528 5.962 12.9062 6.93275 10.6829 9.71025C7.82013 13.31 8.3935 18.4635 11.9919 21.4899L12.6464 21.9807L9.67088 25.5406L9.14425 25.0896Z"
								fill="white"
							/>
						</g>
					</g>
					<defs>
						<clipPath id="clip0_1550_8632">
							<rect
								width="32"
								height="32"
								fill="white"
								transform="translate(0 0.5)"
							/>
						</clipPath>
					</defs>
				</svg>

				BankID och Swish</button
			>
		</li>

		<li class="nav-item lvl-1" on:click={() => goto('signeraavtal')}>
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
					class="dot icon {$isAvtalRedDotActive
						? 'red-dot'
						: 'no-dot'}"
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
					aria-hidden="true"
					class="icon navbar-icon"
					focusable="false"
					width="32"
					height="32"
				>
					<path
						d="M22 2.5C23.6569 2.5 25 3.84315 25 5.5V27.5C25 29.1569 23.6569 30.5 22 30.5H10C8.34315 30.5 7 29.1569 7 27.5V5.5C7 3.84315 8.34315 2.5 10 2.5H22ZM23 23.5H9V27.5C9 28.0523 9.44772 28.5 10 28.5H22C22.5523 28.5 23 28.0523 23 27.5V23.5ZM16 24.5C16.8284 24.5 17.5 25.1716 17.5 26C17.5 26.8284 16.8284 27.5 16 27.5C15.1716 27.5 14.5 26.8284 14.5 26C14.5 25.1716 15.1716 24.5 16 24.5ZM9 8.5V21.5H23V8.5H9ZM9 6.5H23V5.5C23 4.94772 22.5523 4.5 22 4.5H10C9.44772 4.5 9 4.94772 9 5.5V6.5Z"
						fill="white"
					/>
				</svg>
				Kontakta oss</button
			>
		</li>
		<li class="nav-item lvl-1 has-external">
			<a
				class="nav-link"
				href="https://www.lansforsakringar.se"
				target="_blank"
				data-test-id="public-site"
				rel="noreferrer"
				><span class="text-truncate">Länsförsäkringar.se</span>
			</a>
		</li>
	</ul>
</aside>

<style lang="scss">
	aside {
		flex: 0 1 260px;
		background: var(--blue);
		@media (max-width: 800px) {
			display: none !important;
		}
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
			left: 2.5rem;
			top: 0.75rem;
		}
	}
	.no-dot {
		transform: scale(0);
	}
</style>
