const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const config = require('config') //we load the db location from the JSON file
const {insertUsers, getUser} = require('./controllers/routes/book')
const port = 8080

const pgPromise = require('pg-promise')
const pgp = pgPromise()
const db = pgp( config.postgres )

if(config.util.getEnv('NODE_ENV') !== 'test') {
  app.use(morgan('combined')) //'combined' outputs the Apache style LOGs
}

//parse application/json and look for raw text
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/json'}))

app.get("/", (req, res) => res.json({ message: "Welcome to our Bookstore!" }))

app.route("/user")
  .get(getUser)
  .post(insertUsers)

app.listen(port)
console.log("Listening on port " + port)

module.exports = app // for testing
