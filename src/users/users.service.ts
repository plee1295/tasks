/**
 * Data Model Interfaces
 */

import { BaseItem, User } from './user.interface'
import { Users } from './users.interface'

/**
 * In-Memory Store
 */

let users: Users = {
  1: {
    id: 1,
    name: 'Parker',
    email: 'parker@gmail.com',
    password: 'parker_password'
  },
  2: {
    id: 2,
    name: 'Niena',
    email: 'niena@gmail.com',
    password: 'niena'
  },
  3: {
    id: 3,
    name: 'Dakotah',
    email: 'dakotah@gmail.com',
    password: 'dakotah'
  }
}

/**
 * Service Methods
 */

export const findAll = async (): Promise<User[]> => Object.values(users)

export const find = async (id: number): Promise<User> => users[id]

export const create = async (newUser: BaseItem): Promise<User> => {
  const id = new Date().valueOf()

  users[id] = {
    id,
    ...newUser
  }

  return users[id]
}

export const update = async (
  id: number,
  userUpdate: BaseItem
): Promise<User | null> => {
  const user = await find(id)

  if (!user) {
    return null
  }

  users[id] = { id, ...userUpdate }

  return users[id]
}

export const remove = async (id: number): Promise<null | void> => {
  const user = await find(id)

  if (!user) {
    return null
  }

  delete users[id]
}
