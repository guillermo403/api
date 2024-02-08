import { Application, Router } from "express"
import UserRouter from "./routes/user-routes"

const _routes: [string, Router][] = [
  ['/user', UserRouter]
]

export default (app: Application) => {
  _routes.forEach(([path, controller]) => {
    app.use(path, controller)
  })
}
