import { type Application, type Router } from 'express'
import UserRouter from './routes/user-routes'

const _routes: Array<[string, Router]> = [
  ['/user', UserRouter]
]

export default (app: Application): void => {
  _routes.forEach(([path, controller]) => {
    app.use(path, controller)
  })
}
