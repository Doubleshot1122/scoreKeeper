
exports.up = (knex) => {
  return knex.schema.createTable('teams', table => {
    table.increments()
    table.string('team_name').notNullable()
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('teams')
}
