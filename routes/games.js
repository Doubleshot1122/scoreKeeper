const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/games.js')

router.get('/', ctrl.index)
router.post('/new', ctrl.newGame)

module.exports = router;
