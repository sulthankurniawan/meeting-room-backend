const Meeting = require('../models/Meeting');

const getMeetings = async (req, res) => {
    try {
        const meetings = await Meeting.findAll();
        res.json(meetings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createMeeting = async (req, res) => {
    try {
        const newMeeting = await Meeting.create(req.body);
        res.status(201).json(newMeeting);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getMeetings, createMeeting };
