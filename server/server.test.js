// sample of testing express app
const request = require('supertest');
const expect = require('expect');
var app = require('./server.js').app;

describe('Server', () => {
  describe('GET /', () => {
    it('should return hellow world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect('Content-Type', /json/)
        // .expect({
        //   error: 'Page not found'
        // })
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found'
          });
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('should return json array', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect((res) => {
          expect(res.body)
            .toInclude({name: 'Menghua', age: 38})
            .toInclude({name: 'Henry', age: 6}
          );
        })
        .end(done);
    });
  });
});
