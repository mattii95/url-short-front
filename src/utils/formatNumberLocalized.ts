export const formatNumberLocalized = (number: number, locale: string = navigator.language) => {
    return new Intl.NumberFormat(locale).format(number);
}