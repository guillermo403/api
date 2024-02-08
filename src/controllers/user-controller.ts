import { ControllerFunction } from "../types/express"

const getUsers: ControllerFunction = (req, res) => {
  res.send('get users')
}

const createUser: ControllerFunction = (req, res) => {
  const {
    name,
    email,
    password
  } = req.body
  res.send('create user')
}

const getUserById: ControllerFunction = (req, res) => {
  const { id } = req.params
  res.send(`get user by id: ${id}`)
}

const updateUser: ControllerFunction = (req, res) => {
  const { id } = req.params
  const {
    name,
    email,
    password
  } = req.body
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