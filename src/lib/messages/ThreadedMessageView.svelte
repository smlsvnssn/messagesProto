<script>
    import AttachmentsIcon from '$lib/icons/AttachmentsIcon.svelte'
    import MessageIcon from '$lib/icons/MessageIcon.svelte'
    import { messages, activePane, panes } from '$lib/globals'
    import { message } from 'ouml'
    import getDate from './getDate'

    export let threadedMessages, id, isOld

    let open = [1]

    let newMessage

    const toggleOpen = i => (open[i] = !open[i])

    const send = messageText => {
        $messages
            .find(m => m.id === id)
            .content.unshift({
                id: Math.random(),
                dateSent: Date.now(),
                content: messageText,
                type: '',
                isImportant: false,
                isRead: false,
            })
        newMessage = ''
        $messages = $messages
    }
</script>

<ul>
    {#each threadedMessages as message, i}
        <li
            class:unread={!message.isRead}
            class:open={open[i]}
            on:click|stopPropagation={() => toggleOpen(i)}
            on:keypress
        >
            <MessageIcon {message} />

            <div class="content">
                <div class="metadata">
                    <date>
                        {getDate(+message.dateSent, true)}
                    </date>
                    <span class="spacer" />
                    {#if message.attachments?.length}
                        <AttachmentsIcon />
                    {/if}
                </div>
                <p>
                    {@html message.content}
                </p>
                {#if message.action}
                    <a
                        class="action"
                        href={message.action.actionUrl}
                        alt="dunno">{message.action.actionText}</a
                    >
                {/if}
            </div>
        </li>
    {/each}
</ul>

<div class="exits">
    {#if isOld}
        <p class="isOld">
            Den här konversationen är gammal och går inte längre att svara på.
            <br /><a
                href="#"
                on:click|stopPropagation={() =>
                    ($activePane = panes.newMessage)}
                >Skriv ett nytt meddelande istället!</a
            >
        </p>
    {:else}
        <textarea
            class="form-control"
            required=""
            placeholder="Svara på meddelandet"
            bind:value={newMessage}
            id="exampleTextarea"
            rows="1"
        />
        <div class="upload w-100">
            <div class="upload-placeholder" />
            <input
                class="upload-input"
                type="file"
                name="filename"
                id="upload"
                multiple
            />
            <label class="upload-label btn btn-secondary px-1" for="upload">
                <svg
                    focusable="false"
                    aria-hidden="true"
                    class="icon mr-025"
                    width="24"
                    height="24"
                >
                    <use xlink:href="/assets/icons/24/icons.svg#image-doc-24" />
                </svg>
                Bifoga fil
            </label>
        </div>

        <div class="exit">
            <a
                on:mousedown={() => send(newMessage)}
                href="#"
                type="button"
                class="btn btn-primary btn-sm-block"
            >
                Skicka
            </a>
        </div>
    {/if}
</div>

<style lang="scss">
    ul {
        padding-left: 0;
    }
    li {
        padding: 1rem 0rem 1rem 0rem;
        border-bottom: 1px solid var(--shadow);
        //font-size: 0.875rem;
        cursor: pointer;
        display: flex;
        gap: 1rem;

        list-style: none;
        transition: all 0.3s;

        .content {
            display: grid;
            gap: 0.25rem;
            width: 100%;
            & > p {
                // white-space: nowrap;
                overflow: hidden;
                // text-overflow: ellipsis;
                margin-bottom: 0;
                //color: var(--gray);

                display: -webkit-box;
                -webkit-line-clamp: 4;
                -webkit-box-orient: vertical;

                transition: all 0.3s;
            }
            a {
                background: none;
                text-decoration: underline;
                padding-top: 0.25rem;
            }
        }

        &.open .content > p {
            -webkit-line-clamp: inherit;
            overflow: auto;
        }
    }

    .metadata {
        font-size: 11px;
        display: flex;
        gap: 0.375rem;
        align-items: center;

        date {
            color: var(--gray);
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

    .exits {
        position: sticky;
        bottom: 0;
        display: grid;

        box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.05);
        gap: 1rem;

        grid: auto-flow / 1fr 1fr;

        background: #fffd;
        margin: 0 -2.5rem;
        translate: 0 2.5rem;
        padding: 2rem 2.5rem;
        backdrop-filter: blur(0.5rem);

        @media (max-width: 800px) {
            padding: 1.5rem;
            translate: 0 1.5rem;
            margin: 0 -1.5rem;
        }

        .isOld {
            grid-column: 1 / -1;
            font-size: 0.875rem;
            color: var(--gray);
        }
        .exit {
            justify-self: end;
        }
        textarea {
            width: 100%;
            height: 40px;
            transition: all 0.3s ease;
            grid-column: 1 / span 2;
            &:focus {
                height: 8rem;
                &::placeholder {
                    opacity: 0;
                }
            }
        }
    }
</style>
