'use strict';

var mongoose = require('mongoose'),
    Robot = mongoose.model('Robots');

exports.create_a_robot = function(req, res) {
    var new_robot = new Robot(req.body);
    new_robot.save(function(err, robot) {
        if(err)
            res.send(err);
        res.json(robot);
    });
};

exports.get_all_robots = function(req, res) {
    Robot.find({}, function(err, robots) {
        if (err)
            res.send(err);
        res.json(robots);
    });
};