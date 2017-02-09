const chai = require('chai')
const supertest = require('supertest')
/* ADD ME! */
const app = require('../app')

const expect = chai.expect

before(function(done){
  return app.up().then(_server => {
    server = _server
    done()
  })
})

after(function(){
  server.close()
})

describe('app', () => {
  describe('up', () => {
    it('is a function', () => {
      expect(app.up).to.be.an.instanceof(Function)
    })
  })
})
