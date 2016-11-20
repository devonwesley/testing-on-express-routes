const {User} = require('../controllers/models/book')
const chai = require('chai')
const chaiHttp = require('chai-http')
const server = require('../server')
const should = chai.should()

chai.use(chaiHttp)

describe('Books', () => {
  beforeEach(done => User.deleteAllUsers().then(() => done()))
  describe('/POST user', () => {
    it('it should INSERT a user', (done) => {
      const user = {name: 'Diane'}
      chai.request(server)
        .post('/user')
        .send(user)
        .end((err, response) => {
          response.should.have.status(200)
          response.body.should.be.a('object')
          response.body.should.have.property('message').eql('Success!!!')
          done()
        })
      })
  })
  describe('GET /user', () => {
    it('it should get a user', (done) => {
      User.insert('JusDev')
        .then(user_id => {
          chai.request(server)
            .get('/user')
            .send(user_id)
            .end((error, response) => {
              response.should.have.status(200)
              response.body.should.be.a('object')
              response.body.should.have.property('message').eql('Success!!!')
              done()
            })
        })
    })
  })
  describe('GET /user', () => {
    it('it should get a user', (done) => {
      chai.request(server)
        .get('/user')
        .send( 'NOT AN ID' )
        .end((err, response) => {
          response.should.have.status(404)
          response.body.should.be.a('object')
          response.body.should.have.property('message').eql('No Users Found!!!')
          done()
        })
    })
  })
  describe('PUT /user/:user_id', () => {
    it('it should update a users name', (done) => {
      User.insert('JusDev')
        .then(userCreated => {
          chai.request(server)
            .put(`/user/${userCreated.id}`)
            .send({name: 'Not Devon'})
            .end((error, response) => {
              response.should.have.status(200)
              response.body.should.be.a('object')
              response.body.should.have.property('message').eql('User updated')
              response.body.user.should.have.property('name').eql('Not Devon')
              done()
            })
        })

    })
  })
})
