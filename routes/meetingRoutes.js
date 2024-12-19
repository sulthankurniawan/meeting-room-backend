const express = require('express');
const { getMeetings, createMeeting } = require('../controllers/meetingController');
const router = express.Router();

router.get('/meetings', getMeetings);
router.post('/meetings', createMeeting);

module.exports = router;
