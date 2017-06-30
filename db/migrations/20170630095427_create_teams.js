
exports.up = (knex) => {
  return knex.schema.createTable('teams', table => {
    table.increments()
    table.string('team_name').notNullable()
    table.integer('score').defaultTo(0).notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('teams')
}
