import { withParams } from 'vuelidate/lib'

export const isFutureDatetime = withParams({ type: 'isFutureDatetime' }, selectedDatetime => {
  if (selectedDatetime === '') return true
  let selected = new Date(selectedDatetime).getTime()
  let now = Date.now()
  return selected > now
})

export const isFutureDate = withParams({ type: 'isFutureDate' }, selectedDate => {
  if (selectedDate === '') return true
  let selected = new Date(selectedDate).getTime()
  let now = new Date()
  now.setHours(0, 0, 0, 0)
  return selected >= now.getTime()
})
