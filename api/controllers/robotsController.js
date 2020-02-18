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

// read a robot on get and return json
exports.get_one_robot = function(req, res) {
    Robot.findById(req.params.robotId, function(err, robot) {
        if (err)
            res.send(err);
        res.json(robot);
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

// delete a robot on put and return OK
exports.delete_a_robot = function(req, res) {
    Robot.deleteOne({_id: req.params.robotId}, function(err, robot) {
        if(err)
            res.send(err);
        res.json({ message: 'Robot Succesfully deleted'});
    });
};

exports.list_robots_by_filter_armor = function(req, res) {
    Robot.find({ armors: [req.params.filterstring]}, function(err, robots) {
        if(err)
            res.send(err);
        res.json(robots);
    });
};

exports.list_robots_by_filter_weapon = function(req, res) {
    Robot.find({ weapon: [req.params.filterstring]}, function(err, robots) {
        if(err)
            res.send(err);
        res.json(robots);
    });
};