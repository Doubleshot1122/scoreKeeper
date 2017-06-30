const Teams = require('../models/teams.js');

function index(req, res, next) {
  Teams.allTeams().then(results => res.json(results))
}

function create(req, res, next) {
  let body = {
    team_name: req.body.team_name
  }
  console.log(req.body.team_name);
  console.log(body);
  Teams.createTeam(body).then(results => {
    res.json(results)
  })
}

module.exports = {index, create};
