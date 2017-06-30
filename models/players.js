const db = require('../db')

class Players {
  constructor() {}

  static allPlayers(){
    return db('players')
  }

  static createPlayer(body){
    return db('players').insert(body, '*')
  }

  static addPlayerToTeam(body, id){
    return db('players').update(body, '*').where({ id })
  }

}

module.exports = Players;
