<script>
    import MessagePaneButton from '$lib/messages/MessagePaneButton.svelte'
    import { goto } from '$app/navigation'
    import KundtjänstIcon from '$lib/icons/KundtjänstIcon.svelte'
    import SettingsIcon from '$lib/icons/SettingsIcon.svelte'
    import NewMessageIcon from '$lib/icons/NewMessageIcon.svelte'
    import { panes, activePane } from '$lib/globals'

    const activateNewMessagePane = () =>
        ($activePane =
            $activePane === panes.newMessage ? panes.none : panes.newMessage)

    const activateSettingsPane = () =>
        ($activePane =
            $activePane === panes.settings ? panes.none : panes.settings)
</script>

<div id="header" class="lb4">
    <div class="navbar fixed-top navbar-light">
        <button class="n-header-skip link-complex sr-only sr-only-focusable"
            ><span class="link-complex-target">Hoppa till innehåll</span
            ></button
        >
        <nav class="n-header-wrapper" aria-label="Sidhuvud" role="navigation">
            <ul class="navbar-nav nav">
                <li class="nav-item meny">
                    <button
                        class="nav-link n-header-toggle"
                        type="button"
                        aria-expanded="false"
                        aria-controls="header-menu-_182e16bb-19ba-14f2-1037-12a91c081326_24_"
                        role="button"
                        ><span class="n-header-toggle-item">Meny</span></button
                    >
                </li>
                <li class="nav-item">
                    <button
                        class="nav-link n-header-logo"
                        role="button"
                        on:click={() => {
                            //$isRedDotActive = !$isRedDotActive
                            goto('/')
                        }}
                        ><span class="sr-only"
                            >Tillbaka till Länsförsäkringar</span
                        ><img
                            class="n-header-logo-img"
                            alt="Länsförsäkringars logotyp"
                            src="/assets/logo/square-sm.svg"
                        /><img
                            class="n-header-logo-type-img"
                            width="185"
                            alt="Länsförsäkringar skrivet i blått"
                            src="/assets/logo/10.svg"
                        /></button
                    >
                </li>
                <li class="layout-grow">
                    <ul class="reset-list layout-flex justify-content-end">
                        <li class="nav-item me">Lena Fransson</li>
                    </ul>
                </li>
                <li class="nav-item"><MessagePaneButton /></li>

                <li
                    class="nav-item nav-icon"
                    on:click|stopPropagation={activateNewMessagePane}
                >
                    <!-- <KundtjänstIcon /> -->
                    <NewMessageIcon />
                </li>

                <li
                    class="nav-item nav-icon"
                    on:click|stopPropagation={activateSettingsPane}
                >
                    <SettingsIcon />
                </li>

                <li class="">
                    <ul class="reset-list layout-flex justify-content-end">
                        <!-- <li class="nav-item ml-1">
							<span
								data-test-id="personal-menu"
								class="nav-link n-header-user rounded lg"
								role="button"
								tabindex="0"
								aria-haspopup="true"
								id="personal-menu-toggle-_182e16bb-19ba-14f2-1037-12a91c081326_25_"
								aria-expanded="false"
								aria-controls="personal-menu-container-_182e16bb-19ba-14f2-1037-12a91c081326_26_"
								><span class="sr-only">Visa personlig meny</span
								><svg
									aria-hidden="true"
									class="icon"
									focusable="false"
									width="20"
									height="20"
									><use
										xlink:href="/assets/icons/20/icons.svg#user-20"
									/></svg
								>
								<div aria-hidden="true">
									<span class="n-header-user-name lg"
										><div
											style="white-space: nowrap; overflow: hidden;"
										>
											Lisa Flitig
										</div></span
									><span class="n-header-user-title" />
								</div>
								<svg
									aria-hidden="true"
									class="icon"
									focusable="false"
									width="20"
									height="20"
									><use
										xlink:href="/assets/icons/20/icons.svg#chevron-down-20"
									/></svg
								></span
							>
						</li> -->
                        <li class="nav-item">
                            <a
                                class="n-header-logout btn btn-login-logout px-05"
                                href="#logout"
                                data-id="logout">Logga ut</a
                            >
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    </div>
</div>

<style lang="scss">
    .navbar {
        top: 0 !important;
    }
    .nav-icon {
        height: 100%;
        display: grid;
        align-items: center;
        cursor: pointer !important;
        padding: 0.5rem;
        transition: all 0.5s;
        &:hover {
            background: var(--mist);
        }
    }
    .me {
        display: grid;
        align-content: center;
        font-weight: 700;
        color: var(--blue);
        padding-right: 0.5rem;
    }
    .n-header-wrapper {
        width: 100% !important;
        max-width: 1280px;
    }
    .meny {
        display: none;
    }
    @media (max-width: 800px) {
        .meny {
            display: block;
        }
        .n-header-logo-type-img,
        .n-header-user-name.lg {
            display: none;
        }
    }
</style>
