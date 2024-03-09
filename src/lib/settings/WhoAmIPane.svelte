<script>
	import {
		panes,
		activePane,
		isSmallWindow,
		activeSettingsTab,
	} from '$lib/globals'
	import { fly, fade } from 'svelte/transition'
	import { backOut, sineOut } from 'svelte/easing'
	import { clickOutside } from '$lib/actions'

	const hidePane = () => ($activePane = panes.none)

	const setAsInactive = () => ($activeSettingsTab = -1)

	$: arrowXpos = `--x:${$isSmallWindow ? 6.25 : 16.5}rem;`
</script>

<div class="background" transition:fade={{ duration: 200 }}>
	<div class="marginwrapper">
		<div
			class="messagePane"
			in:fly={{ y: -100, duration: 300, easing: backOut }}
			out:fly={{ y: -100, duration: 200, easing: sineOut }}
		>
			<div class="content" use:clickOutside on:clickoutside={hidePane}>
				<header class="messagesHeader" style={arrowXpos}>
					<!-- <ul>
						<li>
							<h4>
								{#if /* $isSmallWindow && */ $activeSettingsTab > -1}
									<a
										href="#"
										class="smallScreenBack"
										on:click|stopPropagation={setAsInactive}
									>
										<ArrowLeftIcon /> Inställningar
									</a>
								{:else}
									Inställningar
								{/if}
							</h4>
						</li>
						<li on:click={hidePane} title="Stäng meddelanden">
							<CloseIcon />
						</li>
					</ul> -->
				</header>
				<div class="messagesBody">
					<ul>
						<li class="inactive">
							<svg
								width="21"
								height="20"
								viewBox="0 0 21 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6.00891 8.46777C6.00891 6.25863 7.79977 4.46777 10.0089 4.46777C10.8743 4.46777 11.9927 4.86579 12.8018 5.67488L14.216 4.26067C13.0251 3.06975 11.3951 2.46777 10.0089 2.46777C6.6952 2.46777 4.00891 5.15406 4.00891 8.46777C4.00891 9.8307 4.46334 11.0875 5.22896 12.0949C4.75058 12.3646 4.33482 12.7001 3.994 13.1048C3.32007 13.9051 3.00891 14.8938 3.00891 15.9677V18.4677H5.00891V15.9677C5.00891 15.2917 5.19776 14.7803 5.52382 14.3931C5.79847 14.0669 6.21818 13.7728 6.83508 13.5606C7.75571 14.1355 8.84351 14.4678 10.0089 14.4678C11.1743 14.4678 12.2621 14.1355 13.1827 13.5606C13.7996 13.7728 14.2193 14.0669 14.494 14.3931C14.8201 14.7803 15.0089 15.2917 15.0089 15.9677V18.4677H17.0089V15.9677C17.0089 14.8938 16.6978 13.9051 16.0238 13.1048C15.683 12.7001 15.2672 12.3646 14.7889 12.0949C15.5545 11.0875 16.0089 9.8307 16.0089 8.46777C16.0089 8.05812 15.9677 7.65706 15.8889 7.26884L15.7263 6.46777H11.0089L10.9196 6.46779H10.9196C10.3882 6.46797 10.2365 6.46802 10.0847 6.40162C9.99039 6.36034 9.75423 6.22234 9.40334 5.52056L7.61448 6.41499C8.06359 7.3132 8.57743 7.9252 9.28309 8.23393C9.8492 8.4816 10.4545 8.47409 10.8606 8.46905L10.8606 8.46905C10.9136 8.46839 10.9632 8.46777 11.0089 8.46777H14.0089C14.0089 10.6769 12.2181 12.4678 10.0089 12.4678C7.79977 12.4678 6.00891 10.6769 6.00891 8.46777Z"
									fill="#005AA0"
									class="s-MzShmddur903"
								></path>
							</svg>
							<a href="#"><h5>Lena Fransson</h5></a>
						</li>
						<li>
							<svg
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.0056 2.4751V5.4751H16.5056C17.8863 5.4751 19.0056 6.59439 19.0056 7.9751V15.9751C19.0056 17.3558 17.8863 18.4751 16.5056 18.4751H3.50562C2.1249 18.4751 1.00562 17.3558 1.00562 15.9751V7.9751C1.00562 6.59439 2.1249 5.4751 3.50562 5.4751H6.00562V2.4751H14.0056ZM17.0056 10.4741L14.3389 12.4751H5.67228L3.00562 10.4761V15.9751C3.00562 16.2512 3.22947 16.4751 3.50562 16.4751H16.5056C16.7818 16.4751 17.0056 16.2512 17.0056 15.9751V10.4741ZM16.5056 7.4751H3.50562C3.22947 7.4751 3.00562 7.69896 3.00562 7.9751V7.9761L6.33895 10.4751H13.6723L17.0056 7.9751C17.0056 7.69896 16.7818 7.4751 16.5056 7.4751ZM12.0056 4.4751H8.00562V5.4751H12.0056V4.4751Z"
									fill="#005AA0"
								/>
							</svg>

							<a href="#"><h5>Lena Fransson enskild firma</h5></a>
						</li>
						<li>
							<svg
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M14.0056 2.4751V5.4751H16.5056C17.8863 5.4751 19.0056 6.59439 19.0056 7.9751V15.9751C19.0056 17.3558 17.8863 18.4751 16.5056 18.4751H3.50562C2.1249 18.4751 1.00562 17.3558 1.00562 15.9751V7.9751C1.00562 6.59439 2.1249 5.4751 3.50562 5.4751H6.00562V2.4751H14.0056ZM17.0056 10.4741L14.3389 12.4751H5.67228L3.00562 10.4761V15.9751C3.00562 16.2512 3.22947 16.4751 3.50562 16.4751H16.5056C16.7818 16.4751 17.0056 16.2512 17.0056 15.9751V10.4741ZM16.5056 7.4751H3.50562C3.22947 7.4751 3.00562 7.69896 3.00562 7.9751V7.9761L6.33895 10.4751H13.6723L17.0056 7.9751C17.0056 7.69896 16.7818 7.4751 16.5056 7.4751ZM12.0056 4.4751H8.00562V5.4751H12.0056V4.4751Z"
									fill="#005AA0"
								/>
							</svg>

							<a href="#">
								<h5>Lenas Snickeri och Dynamit AB</h5>
							</a>
						</li>
						<li>
							<svg
								width="20"
								height="21"
								viewBox="0 0 20 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0_1042_1059)">
									<path
										fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.54682 6.46884C6.90112 6.46884 5.78983 5.64843 5.18997 4.44109L6.98108 3.55118C7.26676 4.12617 7.73092 4.46884 8.54682 4.46884H12.6939L12.8711 5.2467C12.9625 5.64768 13.0089 6.05969 13.0089 6.4775C13.0089 7.775 12.5596 8.96768 11.8081 9.90834C12.3116 9.62783 12.8916 9.46802 13.5089 9.46802C15.4419 9.46802 17.0089 11.035 17.0089 12.968C17.0089 13.5736 16.8551 14.1432 16.5845 14.64C18.0511 15.3492 19.0269 16.6023 19.0269 18.0931V19.4681H17.0269V18.0931C17.0269 17.2804 16.2225 16.488 14.9424 16.1619C14.5049 16.3586 14.0197 16.468 13.5089 16.468C13.0007 16.468 12.5178 16.3597 12.082 16.1649C10.8086 16.4927 10.0089 17.2829 10.0089 18.0931V19.4681H8.0089V18.0931C8.0089 16.6071 8.97846 15.3574 10.4371 14.6469C10.1641 14.1485 10.0089 13.5764 10.0089 12.968C10.0089 12.2527 10.2235 11.5875 10.5918 11.0333C9.71258 11.6296 8.65163 11.978 7.50936 11.978C6.67003 11.978 5.87463 11.79 5.16294 11.4538L5.16329 11.456C3.77682 11.6726 3.00891 12.6391 3.00891 13.9992V19.468H1.00891V13.9992C1.00891 12.2468 1.84121 10.7729 3.28252 9.99743C2.48731 9.04356 2.00891 7.81636 2.00891 6.4775C2.00891 3.43929 4.47115 0.977051 7.50936 0.977051C9.13194 0.977051 10.6414 1.68513 11.6797 2.89117L10.164 4.19603C9.50167 3.42665 8.5432 2.97705 7.50936 2.97705C5.57572 2.97705 4.00891 4.54386 4.00891 6.4775C4.00891 8.41059 5.57606 9.97795 7.50936 9.97795C9.44187 9.97795 11.0089 8.41048 11.0089 6.4775C11.0089 6.4775 10.1882 6.47269 8.54682 6.46884ZM15.0089 12.968C15.0089 13.7964 14.3373 14.468 13.5089 14.468C12.6805 14.468 12.0089 13.7964 12.0089 12.968C12.0089 12.1396 12.6805 11.468 13.5089 11.468C14.3373 11.468 15.0089 12.1396 15.0089 12.968Z"
										fill="#005AA0"
									/>
								</g>
								<defs>
									<clipPath id="clip0_1042_1059">
										<rect
											width="19.998"
											height="20.001"
											fill="white"
											transform="translate(0.00891113 0.467285)"
										/>
									</clipPath>
								</defs>
							</svg>

							<a href="#"><h5>Liselotte Fransson</h5></a>
						</li>
					</ul>
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
		z-index: 2;
		margin: var(--headerHeight) auto 0;
	}
	.marginwrapper {
		max-width: calc(1280px);
		margin: auto;
		padding-left: 1rem;
		@media (width < 800px) {
			padding-left: 0.5rem;
		}
	}
	.messagePane {
		--headerHeight: 3.75rem;
		max-width: calc(32rem);

		margin: 1rem 1rem 1rem auto;

		@media (width < 800px) {
			margin: 0.5rem 0.5rem 0.5rem auto;
		}

		filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1))
			drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));

		.content {
			background: var(--white);
			border-radius: 0.5rem;
			overflow: hidden;
			max-height: calc(100mvh - var(--headerHeight) - 10rem);

			.messagesHeader {
				--x: 0;
				box-shadow: 0 4px 4px rgba(34, 34, 34, 0.05);
				&:before {
					// arrow
					content: '';
					width: 0;
					height: 0;
					border-style: solid;
					border-width: 0 0.5rem 0.75rem 0.5rem;
					border-color: transparent transparent var(--white)
						transparent;
					position: absolute;
					top: -0.675rem;
					right: var(--x);
					@media (width < 800px) {
						top: -0.5rem;
					}
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
				//min-height: 30rem;
				//@media (max-width: 800px) {
				width: 200%;
				&.messageActive {
					transform: translateX(-50%);
				}

				//}

				ul {
					margin: 0;
					//margin-top: 0.25rem;
					//margin-bottom: 0.25rem;
					padding: 0;
					list-style: none;
					width: 100%;

					li {
						border-bottom: 1px solid var(--shadow);

						font-family: 'Intro Cond';
						padding: 0.75rem 1rem;
						display: flex;
						gap: 0.75rem;
						align-items: center;

						&.inactive {
							svg path {
								fill: var(--gray) !important;
							}
							a h5 {
								color: var(--gray) !important;
							}
							&:hover {
								background: var(--white);
							}
						}

						h5 {
							margin: 0;
						}

						transition: background 0.3s;

						&:hover {
							background: var(--cloud);
						}
						a {
							flex: 1;
							//padding-top: 2px;
							background: none;
						}
					}
				}
			}
		}
	}
</style>
