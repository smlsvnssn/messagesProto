<script>
    import SettingsBox from '$lib/settings/SettingsBox.svelte'

    import Section from '$lib/Section.svelte'
    import Row from '$lib/Row.svelte'

    import { isSmallWindow } from '$lib/globals'

    import Slider from '$lib/Slider.svelte'
    export const prerender = true
    let innerWidth

    $: $isSmallWindow = innerWidth < 800
</script>

<div class="wrapper">
    <Section header="Mina inställningar">
        <Row hasChevron={false}>
            <span style:grid-column="span 13"><SettingsBox /></span>
        </Row>
    </Section>
    <Section header="">
        <Row hasChevron={false}>
            <span style:grid-column="span 13"><Slider /></span>
        </Row>
        <Row hasChevron={false}>
            <div class="select" style:grid-column="span 13">
                <label class="select-label" for="select">City</label>
                <input
                    list="timezones"
                    id="timezone"
                    name="timezone"
                    class="select-options"
                />
                <datalist id="timezones">
                    <option value="" disabled selected hidden
                        >Select City</option
                    >
                    <option>Stockholm</option>
                    <option>Göteborg</option>
                    <option>Malmö</option>
                    <option>Umeå</option>
                </datalist>
            </div>
        </Row>
    </Section>
</div>

<style lang="scss">
    * {
        hyphens: auto;
    }
    .wrapper {
        display: flex;
        flex-direction: column;
        width: 100%;

        h4,
        h5,
        h6 {
            margin: 0;
        }
        h4,
        h6 {
            padding: 1rem 1.25rem;
            border-bottom: 2px solid var(--tint);
        }

        .details {
            margin-top: 1rem;
            margin: 1rem -0.75rem 0;
            background: var(--white);
            border-radius: 0.25rem;
            padding: 1.25rem 0.75rem;
        }

        .tagsy {
            padding: 0.25rem 1rem 0.25rem 1rem;
            background: var(--cloud);
            border-radius: 5rem;
            font-size: 0.875rem;
            margin-top: 0.25rem;
            display: inline-block;
            align-items: center;
            gap: 0.25rem;
            font-weight: normal;
        }

        .hasIcon {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .r {
            text-align: right;

            @container (width < 500px) {
                text-align: left;
                display: flex;
                align-items: center;
                width: 100%;
                gap: 1rem;
                justify-content: space-between;
                //border-bottom: 1px solid var(--shadow);
            }
        }

        input[list]::-webkit-calendar-picker-indicator {
            opacity: 0;
        }

        .h {
            height: 100%;
        }

        .black {
            color: var(--black);
        }

        .marginbottom {
            display: inline-block;
            margin-bottom: 0.5rem;
        }
        .plus {
            color: var(--green);
        }
        .minus {
            color: var(--wine);
        }

        figure {
            font-family: var(--font-family-sans-serif);
            font-weight: 300;
            margin-bottom: 0;
            font-size: 1.125rem;

            strong {
                font-weight: bold;
                margin-top: -0.125rem;
                display: inline-block;
            }
        }
        figcaption {
            font-family: var(--font-family-sans-serif);
            font-weight: 300;
            font-size: 1rem;
            line-height: 1.3;
        }
    }
</style>
