import { Request, Response } from "express"

const UserController = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
}
export default UserController

function getUsers (_req: Request, res: Response) {
  res.send('get users')
}

function createUser (req: Request, res: Response) {
  const {
    name,
    email,
    password
  } = req.body
  res.send('create user')
}

function getUserById (req: Request, res: Response) {
  const { id } = req.params
  res.send(`get user by id: ${id}`)
}

function updateUser (req: Request, res: Response) {
  const { id } = req.params
  const {
    name,
    email,
    password
  } = req.body
  res.send(`update user by id: ${id}`)
}

function deleteUser (req: Request, res: Response) {
  const { id } = req.params
  res.send(`delete user by id: ${id}`)
}
