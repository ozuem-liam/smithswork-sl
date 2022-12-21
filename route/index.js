const express = require('express');
const question = require('./question/question.route');
const router = express.Router();

// router.use(auth)
router.use('/api', question);

module.exports = router;
