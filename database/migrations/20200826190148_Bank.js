
exports.up = function(knex) {
    return knex.schema.createTable('Bank', (tbl) => {
        tbl.increments('bid').unique().notNullable();
        tbl.text('name').notNullable();
        tbl.text('location').notNullable();
        tbl.text('password').nullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Bank')
};
