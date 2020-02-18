var request = require('supertest'),
    app = require('../server');

describe('GET /', function () {
    it('respond with json greeting', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('GET /robots', function () {
    it('respond with json list of robots', function(done) {
        request(app)
            .get('/robots')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('POST /robots', function () {
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