const Teams = require('../models/teams.js');

function index(req, res, next) {
  Teams.allTeams().then(results => res.json(results))
}

function create(req, res, next) {
  let body = {
    team_name: req.body.name
  }

  Teams.createTeam(body).then(results => {
    res.json(results)
  })
}

module.exports = {index, create};
