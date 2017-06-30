const Teams = require('../models/teams.js');

function index(req, res, next) {
  Teams.allTeams().then(results => res.json(results))
}

module.exports = {index};
