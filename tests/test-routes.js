var request = require('supertest'),
    app = require('../server');

describe('GET /', function () {
    it('respond with json list of names', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});