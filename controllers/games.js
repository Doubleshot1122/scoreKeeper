const Games = require('../models/games.js');

function index(req, res, next) {
  Games.allGames().then(results => res.json(results))
}

function newGame(req, res, next) {
  let body = {
    game_name: req.body.name
  }
    console.log(req.body.name);
  Games.createGame(body).then(results => res.json(results))
}

  // function update(req, res, next) {
  //   let id = req.params.id;
  //   let body = {
  //     team_id: req.body.team_id
  //   }
  //   console.log(id, body);
  //
  //   Games.addPlayerToTeam(body, id).then(results => res.json(results))
  // }

module.exports = {index, newGame};
