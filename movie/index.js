const express = require('express');
const router = express.Router();

const listMovie = require('./controller');

router.get('/',listMovie);

module.exports = router;