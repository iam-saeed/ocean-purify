
exports.up = function(knex) {
 return knex.schema.createTable('users', tbl => {
      tbl.increments()
      tbl.string('fullname').notNullable()
      tbl.string('email').notNullable()
      tbl.string('username').notNullable()
      tbl.string('password').notNullable()
  })
};


exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
