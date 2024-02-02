<script>
    import Reminder from './Reminder.svelte'
    import SearchBar from './SearchBar.svelte'

    import ArrowLeftIcon from '$lib/icons/ArrowLeftIcon.svelte'
    import MessageView from './MessageView.svelte'
    import MessageList from './MessageList.svelte'
    import MessageActions from './MessageActions.svelte'
    import {
        messages,
        panes,
        activePane,
        activeMessageId,
        isRedDotActive,
        isSmallWindow,
    } from '$lib/globals'
    import { fly, fade } from 'svelte/transition'
    import { backOut, sineOut } from 'svelte/easing'
    import { clickOutside } from '$lib/actions'

    let remind = false
    let search = false

    let searchresult = []
    let searchstr = ''

    const hidePane = () => ($activePane = panes.none)

    const setAsInactive = () => ($activeMessageId = -1)

    $: unread = $messages.filter(m => !m.isRead).length

    $: arrowXpos = `--x:${$isSmallWindow ? 11.25 : 10.75}rem;`

    $: if ($activeMessageId < 0) remind = false

    $isRedDotActive = false
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
                                {#if /* $isSmallWindow && */ $activeMessageId > -1}
                                    <!-- TODO snygga till -->
                                    <a
                                        href="#"
                                        class="smallScreenBack"
                                        on:click|stopPropagation={setAsInactive}
                                    >
                                        <ArrowLeftIcon />
                                        <!-- Tillbaka -->
                                    </a>
                                {:else}
                                    Dina meddelanden
                                    <h6>
                                        {unread || ''}
                                        {#if unread}
                                            Oläst{unread > 1 ? 'a' : ''}
                                        {/if}
                                    </h6>
                                {/if}
                            </h4>
                        </li>
                        <MessageActions bind:remind bind:search />
                    </ul>
                </header>
                {#if remind && $activeMessageId >= 0}
                    <Reminder bind:remind />
                {/if}
                {#if search && $activeMessageId === -1}
                    <SearchBar bind:searchresult bind:searchstr />
                {/if}
                <div
                    class="messagesBody"
                    class:messageActive={$activeMessageId >= 0}
                >
                    <MessageList {searchresult} {searchstr} />
                    <MessageView
                        message={$messages.find(m => m.id === $activeMessageId)}
                    />
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
                        h6 {
                            margin-left: 0.25rem;
                            display: inline;
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
                min-height: 30rem;
                //@media (max-width: 800px) {
                width: 200%;
                &.messageActive {
                    transform: translateX(-50%);
                }
                //}
            }
        }
    }
</style>
