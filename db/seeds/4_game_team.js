exports.seed = (knex) => {
  return knex('game_team').truncate()
    .then(() => {
      return knex('game_team').insert([
        {
          game_id: 1,
          team_id: 1
        },
        {
          game_id: 1,
          team_id: 2
        }
      ])
    })
}
