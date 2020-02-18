'use strict';

module.exports = function(app) {
    var robotController = require('../controllers/robotsController');

    app.route('/robots')
        .get(robotController.get_all_robots)
        .post(robotController.create_a_robot);
}