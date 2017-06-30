const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/players.js')

router.get('/', ctrl.index)
router.put('/:id', ctrl.update)
router.post('/new', ctrl.create)

module.exports = router;
