
exports.up = function(knex) {
    return knex.schema.createTable('Cart', (tbl) => {
        tbl.increments('cid').unique().notNullable();
        tbl.integer('bid').notNullable();
        tbl.integer('rid').notNullable();

    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('Cart')
};
