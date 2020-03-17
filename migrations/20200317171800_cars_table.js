
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.string("VIN").notNullable().index()
      tbl.string("Make").notNullable().index()
      tbl.string("Model").notNullable().index()
      tbl.integer("Mileage").notNullable().index()
      tbl.string("Transmission")
      tbl.string("Title")
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars")
  
};
