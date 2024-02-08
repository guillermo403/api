import addZeros from "./add-zeros"

type ValidFormats =
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY/MM/DD HH:mm:ss'
  | 'DD/MM/YYYY HH:mm:ss'
  | 'DD-MM-YYYY HH:mm:ss'

interface Props {
  format?: ValidFormats
}

export const getDate = ({ format }: Props = {}) => {
  if (format) {
    return getFormattedDate(format)
  }
  
  const d = new Date()
  const date = d.getFullYear() + '-' +
    addZeros(2, d.getMonth() + 1) + '-' +
    addZeros(2, d.getDate()) + ' ' +
    addZeros(2, d.getHours()) + ':' +
    addZeros(2, d.getMinutes()) + ':' +
    addZeros(2, d.getSeconds())

  return date
}

function getFormattedDate (format: ValidFormats) {
  const d = new Date()
  const date = format
    .replace('YYYY', d.getFullYear().toString())
    .replace('MM', addZeros(2, d.getMonth() + 1))
    .replace('DD', addZeros(2, d.getDate()))
    .replace('HH', addZeros(2, d.getHours()))
    .replace('mm', addZeros(2, d.getMinutes()))
    .replace('ss', addZeros(2, d.getSeconds()))

  return date
}