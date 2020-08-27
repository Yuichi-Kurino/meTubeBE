
exports.up = function(knex) {
    return knex.schema.createTable('Food', (tbl) => {
        tbl.increments('fid').unique().notNullable();
        tbl.text('name').notNullable();
        tbl.integer('quantity');
        tbl.float('price');
        tbl.integer('rid');

    })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Food')
};
