const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/:id', (req, res) => {
    const page = req.query.page || 1,
        limit = parseInt(req.query.limit, 10) || 20;

    Message.paginate({
        room_id: req.params.id
    }, {page, limit}, (err, messages) => {
        res.send({
            success: true,
            total: messages.total,
            messages: messages.docs,
            limit: messages.limit,
            page: messages.page,
            pages: messages.pages,
            offset: messages.offset,
        })
    })
});

router.post('/:id', (req, res) => {
    const message = new Message({
        content: req.body.content,
        created_at: Date.now(),
        room_id: req.params.id,
        user_id: req.body.user_id,
    });

    message.save((err, message) => {
        res.send({
            success: true,
            message,
        })
    });
});

module.exports = router;
