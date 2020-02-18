'use strict';

var mongoose = require('mongoose'),
    Robot = mongoose.model('Robots');

// create a robot on post and return json
exports.create_a_robot = function(req, res) {
    var new_robot = new Robot(req.body);
    new_robot.save(function(err, robot) {
        if(err)
            res.send(err);
        res.json(robot);
    });
};

// return json list of robots
exports.get_all_robots = function(req, res) {
    Robot.find({}, function(err, robots) {
        if (err)
            res.send(err);
        res.json(robots);
    });
};

// update a robot on put and return json
exports.update_a_robot = function(req, res) {
    Robot.findOneAndUpdate({_id: req.params.robotId}, req.body, {new: true}, function(err, robot) {
        if(err)
            res.send(err);
        res.json(robot);
    });
};