import { getDate } from "./dates-helper"

type LogType = 'info' | 'warn' | 'error'

const logger = {
  info: (message: string) => logMessage('info', message),
  warn: (message: string) => logMessage('warn', message),
  error: (message: string) => logMessage('error', message)
}
export default logger

function logMessage (type: LogType, message: string) {
  const date = getDate()
  console.log(`${date} [${type.toUpperCase()}] # ${message}`)
}