import { Router } from 'express'
import UserController from '../controllers/user-controller'

const UserRouter = Router()
export default UserRouter

UserRouter.get('/', UserController.getUsers)
UserRouter.post('/', UserController.createUser)
UserRouter.get('/:id', UserController.getUserById)
UserRouter.put('/:id', UserController.updateUser)
UserRouter.delete('/:id', UserController.deleteUser)
