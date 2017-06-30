const db = require('../db')

class Games {
  constructor() {}

  static allGames(){
    return db('games')
  }

  static createGame(body){
    return db('games').insert(body, '*')
  }

  static addPlayerToTeam(body, id){
    return db('games').update(body, '*').where({ id })
  }

}

module.exports = Games;
