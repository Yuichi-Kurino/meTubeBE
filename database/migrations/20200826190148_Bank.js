
exports.up = function(knex) {
    return knex.schema.createTable('Bank', (tbl) => {
        tbl.increments('bid').unique().notNullable();
        tbl.text('name').notNullable();
        tbl.text('location').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Bank')
};
