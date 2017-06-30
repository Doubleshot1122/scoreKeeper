const db = require('../db')

class Players {
  constructor() {}

  static allPlayers(){
    return db('players')
  }

}

module.exports = Players;
