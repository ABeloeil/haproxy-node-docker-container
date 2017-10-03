const mongoose = require('mongoose');
const db = require('../config/database');
const slug = require('mongoose-url-slugs');

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    created_at: Date,
    users: [String],
});

schema.plugin(slug('name'));

module.exports = mongoose.model('Room', schema);
