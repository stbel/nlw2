
export function convertStringHourToMinutes(stringHour: string) {
  
  const [hours, minutes] = stringHour.split(':').map(Number)

  return (hours * 60) + minutes
}