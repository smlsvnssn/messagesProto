<script>
    import MoneyIcon from '$lib/icons/MoneyIcon.svelte'
    import * as ö from 'ouml'
    export let settings = [
        { name: 'Inget', value: true, role: 'master' },
        { name: 'Via epost', value: false, role: 'default' },
        { name: 'På mina sidor och i appen', value: false },
        { name: 'På sms', value: false },
        { name: 'På telefon', value: false },
    ]

    let isOn = false

    const mapColumn = (arr, column) => f =>
        arr.map(v => ({
            ...v,
            [column]: f(v),
        }))

    const optionHasChanged = (role, name, newVal) => {
        const setValues = mapColumn(settings, 'value')

        const getNewSettings = () => {
            if (role === 'master') {
                if (newVal === true)
                    return setValues(option =>
                        option.role === 'master' ? true : false,
                    )
                return setValues(option =>
                    option.role === 'master'
                        ? false
                        : option?.role === 'default'
                          ? true
                          : option.value,
                )
            }

            return setValues(option =>
                option.role === 'master'
                    ? false
                    : option.name === name
                      ? newVal
                      : option.value,
            )
        }

        const activateMasterIfAllDeselected = updated =>
            updated.findIndex(option => option.value === true) === -1
                ? setValues(option =>
                      option.role === 'master' ? true : option.value,
                  )
                : updated

        settings = ö.pipe(getNewSettings(), activateMasterIfAllDeselected)
    }

    $: isOn = !settings.find(v => v.role === 'master').value
</script>

<div class:isOn class="wrapper">
    <MoneyIcon />
    <div class="text">
        <h5>Erbjudanden</h5>
        <p>När vi behöver veta hur vi kan skicka pengar till dig.</p>
    </div>
    <div class="settings">
        {#each settings as option, i}
            <div class="custom-control custom-checkbox mr-1 {option.role}">
                <input
                    type="checkbox"
                    on:change={e =>
                        optionHasChanged(
                            option.role,
                            option.name,
                            e.target.checked,
                        )}
                    checked={option.value}
                    class="custom-control-input"
                    id={option.name + i}
                />
                <label class="custom-control-label" for={option.name + i}>
                    {option.name}
                </label>
            </div>
            <br />
        {/each}
    </div>
</div>

<style lang="scss">
    .wrapper {
        container-type: inline-size;
        outline-offset: -2px;
        outline: 2px solid var(--smoke);
        border-radius: 0.25rem;
        padding: 1rem;
        display: flex;

        gap: 1rem;
        transition: all 0.5s;

        .master {
            margin-bottom: 0.5rem;
        }

        @container (width < 500px) {
            flex-direction: column;
            gap: 0;
        }

        .text {
            padding-right: 2rem;
            text-wrap: pretty;
        }
        .settings {
            flex: 1 0 50%;
        }

        h5 {
            color: var(--gray);
        }

        :global(path) {
            fill: var(--gray) !important;
        }

        &.isOn {
            outline: 2px solid transparent;
            background: var(--cloud);

            h5 {
                color: var(--navy);
            }

            :global(path) {
                fill: var(--blue) !important;
            }
        }
    }
</style>
