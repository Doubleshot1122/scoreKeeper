const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/players.js')

router.get('/', ctrl.index)

module.exports = router;
