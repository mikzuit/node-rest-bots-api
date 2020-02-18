'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RobotsSchema = new Schema({
    type: [
    ],
    name: {
        type: String,
        Required: 'Please enter Robot Name'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    armors: [
    ],
    weapons: [
    ]
});

module.exports = mongoose.model('Robots', RobotsSchema);