<script>
    export let title = 'Title'
    export let value = 0
    export let min = 0
    export let max = 100
    export let step = 1

    // sanitize
    $: value = Math.max(min, Math.min(value, max))
</script>

<label for="slider-{title}"> {title} </label>
<span>
    <input
        type="range"
        class="slider {title}"
        name="slider-{title}"
        bind:value
        {min}
        {max}
        {step}
    /><input type="number" class="slider" bind:value {min} {max} {step} />
</span>

<style lang="scss">
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        //margin: 0;
    }

    span {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    input[type='range'] {
        accent-color: var(--blue);
        flex: 1 1;
    }

    input[type='number'] {
        -moz-appearance: textfield;
        flex: 0 1 4ch;
        border: none;
        text-align: left;
    }
</style>
