
exports.up = function(knex) {
  return knex.schema.table("cars", tbl => {
      tbl.increments();
      tbl.string("VIN").notNullable().index()
      tbl.string("make").notNullable().index()
      tbl.string("model").notNullable().index()
      tbl.integer("mileage").notNullable().index()
      tbl.string("transmission")
      tbl.string("title")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
  
};
