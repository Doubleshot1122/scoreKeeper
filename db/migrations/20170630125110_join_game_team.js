
exports.up = (knex) => {
  return knex.schema.createTable('game_team', table => {
    table.integer('game_id').notNullable()
    table.integer('team_id').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('game_team')
}
