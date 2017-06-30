const db = require('../db')

class Teams {
  constructor() {}

  static allTeams(){
    return db('teams')
  }

}

module.exports = Teams;
