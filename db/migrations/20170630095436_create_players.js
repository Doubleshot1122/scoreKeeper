
exports.up = (knex) => {
  return knex.schema.createTable('players', table => {
    table.increments()
    table.string('player_name').notNullable()
    table.integer('team_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('players')
}
