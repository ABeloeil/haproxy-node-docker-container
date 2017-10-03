const express = require('express');
const router = express.Router();
const Room = require('../models/room');

router.get('/:user_id', (req, res) => {
    Room.find({'users': req.params.user_id}, (err, rooms) => {
        res.send({
            success: true,
            rooms
        })
    });
});

router.post('/', (req, res) => {
    const room = new Room({
        name: req.body.name,
        users: req.body.users,
        created_at: Date.now(),
    });
    room.save((err, room) => {
        if (err) {
            return res.status(500).send({
                success: false,
                error: err.message,
            });
        }
        return res.send({
            success: true,
            room,
        })
    });
});

router.delete('/:id', (req, res) => {
    Room.findByIdAndRemove(req.params.id, (err, room) => {
        res.send({
            success: true,
        })
    });
});

module.exports = router;
