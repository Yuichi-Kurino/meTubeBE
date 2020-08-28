
exports.up = function(knex) {
    return knex.schema.createTable('Rest', (tbl) => {
        tbl.increments('rid').unique().notNullable();
        tbl.text('name').notNullable();
        tbl.text('location').notNullable();
        tbl.text('password').nullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Rest')
};
