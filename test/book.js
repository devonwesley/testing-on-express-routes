const {User} = require('../controllers/models/book')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('Books', () => {
  // beforeEach( done => {
  //   User.deleteAllUsers()
  //     .then( () => done() )
  //     .catch( error => console.log(error) )
  // })

  describe('GET /user', () => {
    it('it should get a user', (done) => {
      let user = { id: 15 }
      chai.request( server )
        .get('/user')
        .send( user )
        .end((err, response) => {
          console.log( 'GET USERS RSPONSE', response.body )
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.have.property('message').eql('Success!!!');
          done()
        })
    })
  })
  describe('/POST user', () => {
    it('it should INSERT a user', (done) => {
      let user = {
        name: 'Diane'
      }
      chai.request( server )
          .post('/user')
          .send( user )
          .end((err, response) => {
            response.should.have.status(200)
            response.body.should.be.a('object')
            response.body.should.have.property('message').eql('Success!!!');
            done()
          })
      })
  })

})
