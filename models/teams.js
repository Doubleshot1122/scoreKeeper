const db = require('../db')

class Teams {
  constructor() {}

  static allTeams(){
    return db('teams')
  }

  static createTeam(body){
    return db('teams').insert(body, '*')
  }

}

module.exports = Teams;
