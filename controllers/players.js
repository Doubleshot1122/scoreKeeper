const Players = require('../models/players.js');

function index(req, res, next) {
  Players.allPlayers().then(results => res.json(results))
}

function create(req, res, next) {
  let body = {
    player_name: req.body.name
  }

  Players.createPlayer(body).then(results => res.json(results))
}

  function update(req, res, next) {
    let id = req.params.id;
    let body = {
      team_id: req.body.team_id
    }
    console.log(id, body);

    Players.addPlayerToTeam(body, id).then(results => res.json(results))
  }

module.exports = {index, create, update};
