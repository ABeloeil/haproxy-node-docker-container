const mongoose = require('mongoose');
const db = require('../config/database');
const paginate = require('mongoose-paginate');

const schema = mongoose.Schema({
    content: String,
    created_at: Date,
    user: String,
    room_id: String,
});

schema.plugin(paginate);

module.exports = mongoose.model('Message', schema);
