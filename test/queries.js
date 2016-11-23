const {User} = require('../controllers/models/book')
const {expect} = require('chai')

describe('Queries', () => {
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
})
