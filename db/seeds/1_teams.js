exports.seed = (knex) => {
  return knex('teams').truncate()
    .then(() => {
      return knex('teams').insert([
        {
          team_name: 'fighting mongooses'
        },
        {
          team_name: 'alpha'
        }
      ])
    })
}
