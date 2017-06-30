const Players = require('../models/players.js');

function index(req, res, next) {
  Players.allPlayers().then(results => res.json(results))
}

module.exports = {index};
