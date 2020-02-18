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


describe('POST /', function () {
    var robot = {
        "armors": [
            "shield",
            "invisible shield"
        ],
        "name": "sean",
        "weapons": [
            "map",
            "code"
        ],
        "type": "tactirobot"
    };
    it('respond with json robot created', function(done) {
        request(app)
            .post('/robots')
            .send(robot)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});