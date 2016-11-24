const {User} = require('../controllers/models/book')
const chai = require('chai')
const should = chai.should()
const expect = chai.expect

describe('Queries', () => {
  beforeEach(done => User.deleteAllUsers().then(() => done()))
  describe('INSERT Queries', () => {
    it('it should insert a user into the databse', done => {
      User.insert('Jusdev').then(user => {
        expect(user).to.have.property('id')
        expect(user.name).to.eql('Jusdev')
        expect(user).to.be.a('object')
        done()
      })
    })
  })

  describe('SELECT a user', () => {
    it('should get all users', done => {
      Promise.all([
        User.insert('Bobs'),
        User.insert('Ricky'),
        User.insert('Bobby')
      ]).then(() => {
        User.list().then(users => {
          expect(users).to.be.a('array')
          expect(users.length).to.eql(3)
          const userNames = ['Bobs', 'Ricky', 'Bobby']
          for (let i = 0; i < users.length; i++) {
            expect(users[i]).to.be.a('object')
            expect(users[i].id).to.be.a('number')
            expect(users[i].name).to.be.a('string')
            users[i].should.have.property('name').eql(userNames[i])
          }
          done()
        })
      })
    })
  })
  describe('SELECT a user', () => {
    it('should get all users', done => {
      User.insert('Jaylen').then(createdUser => {
        const { id, name } = createdUser
        User.findById(createdUser.id).then(userById => {
          expect(userById).to.be.a('object')
          expect(userById.id).to.be.a('number')
          expect(userById.name).to.be.a('string')
          userById.should.have.property('name').eql(name)
          userById.should.have.property('id').eql(id)
          done()
        })
      })
    })
  })
})
