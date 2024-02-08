import express from 'express'
import dotenv from 'dotenv'
import router from './router'
import { getDate } from './utils/dates-helper'
import logger from './utils/logger'
import { ControllerFunction } from './types/express'

export default () => {
  dotenv.config()

  const app = express()
  const port = process.env.PORT ?? 1234

  app.use(express.json())
  app.use('*', logRequest)
  router(app)

  app.listen(port, () => {
    logger.info(`Server listening on port ${port}`)
  })
}

const logRequest: ControllerFunction = function (req, _res, next) {
  const { method, originalUrl } = req
  const ip = req.ip
    ?.replace('::ffff:', '')
    ?.replace('::1', '127.0.0.1')
  const date = getDate()
  console.log(`${date} # ${ip} => [${method.toUpperCase()}] # ${originalUrl}`)
  next()
}
