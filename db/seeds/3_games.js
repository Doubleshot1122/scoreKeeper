exports.seed = (knex) => {
  return knex('games').truncate()
    .then(() => {
      return knex('games').insert([
        {
          game_name: 'g48 Trivia'
        },
        {
          game_name: 'g50 Trivia'
        }
      ])
    })
}
