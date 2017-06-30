const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/games.js')

router.get('/', ctrl.index)

module.exports = router;
