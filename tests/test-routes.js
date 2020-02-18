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

describe('GET /robots/:robotId', function () {
    it('respond with json one robots', function(done) {
        request(app)
            .get('/robots/5e4be0c28c2308002be45043')
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

describe('PUT /robots/:robotId', function () {
    var robot = {
        "armors": [
            "invisible shield"
        ],
        "name": "sean",
        "weapons": [
            "map",
            "code"
        ],
        "type": "tactirobot"
    };
    it('respond with json robot updated', function(done) {
        request(app)
            .put('/robots/5e4be0c28c2308002be45043')
            .send(robot)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

describe('DELETE /robots/:robotId', function () {
    it('respond with robot deleted', function(done) {
        request(app)
            .delete('/robots/5e4be0c28c2308002be45043')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});

