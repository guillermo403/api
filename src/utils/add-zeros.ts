export default (length: number, value: string | number) => {
  if (typeof value === 'number') {
    value = String(value)
  }

  return value.padStart(length, '0')
}