const config = require('config')
const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp( config.postgres )


const insertUser = 'INSERT INTO users (name) VALUES ($1) RETURNING id, name'
const findUserById = 'SELECT * FROM users WHERE id = $1'
const listAllUsers = 'SELECT * FROM users'
const updateUser = 'UPDATE users SET name = $1 WHERE id = $2 RETURNING id, name'
const deleteUser = 'DELETE FROM users WHERE id = $1'
const deleteAllUsers = 'DELETE FROM users'

const User = {
  insert: name => db.oneOrNone(insertUser, [name]),
  findById: id => db.oneOrNone(findUserById, [id]),
  list: () => db.any(listAllUsers),
  update: user => db.oneOrNone(updateUser, [user.name,user.id]),
  deleteById: id => db.none(deleteUser, [id]),
  deleteAllUsers: () => db.none(deleteAllUsers)
}

module.exports = { User }
