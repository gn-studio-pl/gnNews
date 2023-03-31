export function formatDate(date:string): string{
    let [datePart, hourPart] = date.split('T');
    let [year, month, day] = datePart.split('-');
    let [hour, minute, second] = hourPart.split(':');

    return hour + ':' + minute + " " + day + '.' + month + '.' + year;
}