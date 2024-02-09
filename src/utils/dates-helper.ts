import addZeros from './add-zeros'

type ValidFormat =
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY/MM/DD HH:mm:ss'
  | 'DD/MM/YYYY HH:mm:ss'
  | 'DD-MM-YYYY HH:mm:ss'

interface Props {
  format: ValidFormat
}

export const getDate = ({ format }: Props = { format: 'DD/MM/YYYY HH:mm:ss' }): ValidFormat => {
  const d = new Date()
  const date = format
    .replace('YYYY', d.getFullYear().toString())
    .replace('MM', addZeros(2, d.getMonth() + 1))
    .replace('DD', addZeros(2, d.getDate()))
    .replace('HH', addZeros(2, d.getHours()))
    .replace('mm', addZeros(2, d.getMinutes()))
    .replace('ss', addZeros(2, d.getSeconds()))

  return date as ValidFormat
}
