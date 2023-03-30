export function getDateFromString(dateString: string): string {
  let date = new Date()
  date.setTime(Date.parse(dateString))

  let newDate = `${date.getUTCFullYear()}-${date.getUTCMonth()}-${date.getUTCDate()}`
  return newDate
}
