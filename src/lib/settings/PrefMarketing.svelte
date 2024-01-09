<script>
    import SettingsBox from './SettingsBox.svelte'

    const messageTypes = [
        {
            icon: '',
            header: 'Erbjudanden',
            body: 'Förslag och erbjudanden om produkter och tjänster hos oss som vi tror passar dig. ',
            settings: [
                { name: 'Inget', value: false, role: 'master' },
                { name: 'E-post', value: true, role: 'default' },
                { name: 'Meddelande på Mina sidor/i appen', value: true },
                { name: 'Sms', value: true },
                { name: 'Telefon', value: false },
            ],
        },
        {
            icon: '',
            header: 'Kundinformation',
            body: 'Information knuten till de försäkringar, banktjänster och förmåner du har hos oss, till exempel skadeförebyggande råd. ',
            settings: [
                { name: 'Inget', value: true, role: 'master' },
                { name: 'E-post', value: false, role: 'default' },
                { name: 'Meddelande på Mina sidor/i appen', value: false },
                { name: 'Sms', value: false },
                { name: 'Telefon', value: false },
            ],
        },
        {
            icon: '',
            header: 'Nyheter och tips',
            body: 'Lokala nyheter från ditt länsbolag, samt det senaste inom försäkringar, pension och ekonomi från våra expterter. ',
            settings: [
                { name: 'Inget', value: false, role: 'master' },
                { name: 'E-post', value: true, role: 'default' },
            ],
        },
        {
            icon: '',
            header: 'Evenemang',
            body: 'Inbjudningar till digitala och fysiska evenemang och seminarier. ',
            settings: [
                { name: 'Inget', value: false, role: 'master' },
                { name: 'E-post', value: true, role: 'default' },
                { name: 'Brev', value: false },
            ],
        },
        {
            icon: '',
            header: 'Kundundersökningar',
            body: 'Förbättra upplevelsen för dig själv och andra genom att svara på frågor då och då. ',
            settings: [
                { name: 'Inget', value: false, role: 'master' },
                { name: 'E-post', value: true, role: 'default' },
                { name: 'Meddelande på Mina sidor/i appen', value: false },
                { name: 'Sms', value: false },
                { name: 'Brev', value: false },
            ],
        },
    ]
</script>

<div class="wrapper">
    <div>
        <h4>Vad får vi skicka till dig?</h4>
        <p>
            Ibland vill vi nå dig med saker som <strong>
                erbjudanden, nyheter och råd.</strong
            > Du väljer själv vad av detta du vill ha från oss och i vilken kanal.
            Du kan ändra dina inställningar när du vill.
        </p>
    </div>
    {#each messageTypes as data}
        <SettingsBox {data}></SettingsBox>
    {/each}
</div>

<style>
    .wrapper {
        container-type: inline-size;
        flex: 1 0 50%;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        padding: 2.5rem;
        position: relative;
        max-height: calc(100dvh - 9.375rem);
        overflow-y: auto;

        @media (max-width: 800px) {
            padding: 1.5rem;
        }
    }
</style>
