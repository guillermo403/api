import { type ControllerFunction } from '../types/express'

const getUsers: ControllerFunction = (_req, res) => {
  res.send('get users')
}

const createUser: ControllerFunction = (_req, res) => {
  res.send('create user')
}

const getUserById: ControllerFunction = (req, res) => {
  const { id } = req.params
  res.send(`get user by id: ${id}`)
}

const updateUser: ControllerFunction = (req, res) => {
  const { id } = req.params
  res.send(`update user by id: ${id}`)
}

const deleteUser: ControllerFunction = (req, res) => {
  const { id } = req.params
  res.send(`delete user by id: ${id}`)
}

const UserController = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
export default UserController
