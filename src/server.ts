import express, { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import router from './router'
import { getDate } from './utils/dates-helper'
import logger from './utils/logger'

export default () => {
  dotenv.config()

  const app = express()
  app.use('*', logRequest)
  router(app)

  const port = process.env.PORT ?? 1234
  
  app.listen(port, () => {
    logger.info(`Server listening on port ${port}`)
  })
}

function logRequest (req: Request, _res: Response, next: NextFunction) {
  const { method, originalUrl } = req
  const date = getDate()
  console.log(`${date} [${method.toUpperCase()}] # ${originalUrl}`)
  next()
}
