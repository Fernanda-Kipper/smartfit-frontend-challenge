export interface Location {
  id: number,
  title: string,
  content: string,
  opened: boolean,
  mask: string,
  towel: string,
  fountain: string,
  locker_room: string,
  schedules: Schedule[]
}

interface Schedule {
  weekdays: string,
  hour: string
}
