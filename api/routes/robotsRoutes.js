'use strict';

module.exports = function(app) {
    var robotController = require('../controllers/robotsController');

    app.route('/robots')
        .post(robotController.create_a_robot);
}