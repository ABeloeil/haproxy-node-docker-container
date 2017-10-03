const mongoose = require('mongoose');
const parameters = require('./parameters.json');

const db = mongoose.connect(parameters.mongodb_url + parameters.mongodb_schema, {
    user: parameters.mongodb_user,
    pass: parameters.mongodb_password,
});

mongoose.Promise = require('bluebird');

module.export = db;

