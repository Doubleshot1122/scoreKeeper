const db = require('../db')

class Players {
  constructor() {}

  static allPlayers(){
    return db('players')
  }

  static createPlayer(body){
    return db('players').insert(body, '*')
  }

}

module.exports = Players;
