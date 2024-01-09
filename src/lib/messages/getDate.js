const timeFormat = {
    hour: 'numeric',
    minute: '2-digit',
}
const dateFormat = {
    month: 'short',
    day: 'numeric',
}
const yearFormat = {
    year: 'numeric',
}

const isDaysRelativeToToday = (date, numberOfDays) => {
    const dayInMs = 86_400_000
    return (
        new Date(date).setHours(0, 0, 0, 0) ===
        new Date(Date.now() + dayInMs * numberOfDays).setHours(0, 0, 0, 0)
    )
}
const capitalise = s => s[0].toUpperCase() + s.slice(1)
const noDots = s => s.replaceAll('.', '')

export default (d, alwaysIncludeTime = false, locale = 'sv-SE') => {
    const date = new Date(d)

    const relativeTime = new Intl.RelativeTimeFormat(locale.substring(0, 2), {
        style: 'long',
        numeric: 'auto',
    })

    if (isNaN(date)) return '-'

    // today
    if (isDaysRelativeToToday(date, 0))
        return date.toLocaleTimeString(locale, timeFormat)

    // yesterday
    if (isDaysRelativeToToday(date, -1))
        return `${capitalise(
            relativeTime.format(-1, 'day'),
        )} ${date.toLocaleTimeString(locale, timeFormat)}`

    // yesteryear
    if (date.getFullYear() !== new Date().getFullYear())
        return noDots(
            date.toLocaleDateString(locale, {
                ...(alwaysIncludeTime ? timeFormat : {}),
                ...dateFormat,
                ...yearFormat,
            }),
        )

    return noDots(
        date.toLocaleDateString(locale, {
            ...(alwaysIncludeTime ? timeFormat : {}),
            ...dateFormat,
        }),
    )
}
