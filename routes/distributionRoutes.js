const express = require('express');
const router = express.Router();
const { distributeUsers, toggleTopAstrologer } = require('../controllers/distributionController');

router.post('/distribute', distributeUsers);
router.post('/toggle-top', toggleTopAstrologer);

module.exports = router;
