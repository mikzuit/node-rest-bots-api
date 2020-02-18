'use strict';

module.exports = function(app) {
    var robotController = require('../controllers/robotsController');

    app.route('/robots')
        .get(robotController.get_all_robots)
        .post(robotController.create_a_robot);
    
    app.route('/robots/:robotId')
        .get(robotController.get_one_robot)
        .put(robotController.update_a_robot)
        .delete(robotController.delete_a_robot);

    app.route('/robots/armor/:filterstring')
        .get(robotController.list_robots_by_filter_armor);

    app.route('/robots/weapon/:filterstring')
        .get(robotController.list_robots_by_filter_weapon);
}