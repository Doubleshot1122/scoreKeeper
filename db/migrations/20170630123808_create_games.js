
exports.up = (knex) => {
  return knex.schema.createTable('games', table => {
    table.increments()
    table.string('game_name').notNullable()
    table.integer('score').defaultTo(0).notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('games')
}
