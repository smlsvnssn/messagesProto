<script>
    import SettingsList from './SettingsList.svelte'

    import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte'
    import CloseIcon from '$lib/icons/CloseIcon.svelte'
    import {
        panes,
        activePane,
        isSmallWindow,
        activeSettingsTab,
    } from '$lib/globals'
    import { fly, fade } from 'svelte/transition'
    import { backOut, sineOut } from 'svelte/easing'
    import { clickOutside } from '$lib/actions'
    import PrefMarketing from './PrefMarketing.svelte'

    let remind = false
    let search = false

    let searchresult = []
    let searchstr = ''

    const hidePane = () => ($activePane = panes.none)

    const setAsInactive = () => ($activeSettingsTab = -1)

    $: arrowXpos = `--x:${$isSmallWindow ? 6.25 : 5.75}rem;`
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
                    <ul>
                        <li>
                            <h4>
                                {#if /* $isSmallWindow && */ $activeSettingsTab > -1}
                                    <!-- TODO snygga till -->
                                    <a
                                        href="#"
                                        class="smallScreenBack"
                                        on:click|stopPropagation={setAsInactive}
                                    >
                                        <ArrowLeftIcon /> Inställningar
                                        <!-- Tillbaka -->
                                    </a>
                                {:else}
                                    Inställningar
                                {/if}
                            </h4>
                        </li>
                        <li on:click={hidePane} title="Stäng meddelanden">
                            <CloseIcon />
                        </li>
                    </ul>
                </header>
                <div
                    class="messagesBody"
                    class:messageActive={$activeSettingsTab >= 0}
                >
                    <SettingsList></SettingsList>

                    {#if $activeSettingsTab === 2}
                        <PrefMarketing></PrefMarketing>
                    {/if}
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
        z-index: 1;
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
            border-radius: 4px;
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
                    margin-top: 0.25rem;
                    margin-bottom: 0.25rem;
                    padding: 0;
                    list-style: none;
                    width: 100%;

                    li {
                        font-family: 'Intro Cond';
                        padding: 0.75rem 1rem;
                        display: flex;
                        gap: 0.75rem;
                        align-items: center;

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
