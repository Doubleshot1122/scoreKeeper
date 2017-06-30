exports.seed = (knex) => {
  return knex('players').truncate()
    .then(() => {
      return knex('players').insert([
        {
          player_name: 'Robert Nash',
          team_id: 1
        },
        {
          player_name: 'Fairy Bridges',
          team_id: 1
        },
        {
          player_name: 'Chuck Walker',
          team_id: 2
        },
        {
          player_name: 'Philip Fry',
          team_id: 2
        }
      ])
    })
}
