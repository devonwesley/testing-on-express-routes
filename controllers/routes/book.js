const { User } = require('../models/book')

const insertUsers = ( request, response ) =>
  User.insert( request.body.name )
    .then( id => response.json( { id, message: "Success!!!" } ) )
    .catch( error => response.json( { error, message: "Failure!!!" } ) )

const getUser = (request,response) =>
    User.findById( request.body.id )
      .then(user => {
        response.json({user, message: "Success!!!"})
      })
      .catch(error => response.json({error,message: "Failure!!!"}) )

module.exports = { insertUsers, getUser }
