const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('config')
const {insertUsers, getUser, updateUser, deleteUser} = require('./controllers/routes/book')
const port = 8080

if(config.util.getEnv('NODE_ENV') !== 'test') app.use(morgan('combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))

app.get("/", (request, response) => response.json({message: "This is testing Routes 101"}))

app.route("/user")
  .get(getUser)
  .post(insertUsers)

app.route('/user/:user_id')
  .put(updateUser)
  .delete(deleteUser)

app.listen(port)

module.exports = app
