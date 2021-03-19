exports.up = function(knex) {
    return knex.schema
    .createTable("projects", (table) => {
      table.increments("project_id");
      table.string("project_name", 128).unique().notNullable();
      table.string("project_description");
      table.boolean("project_completed").defaultTo(false);
    })
    .createTable("resources", (table) => {
      table.increments("resource_id");
      table.string("resource_name", 128).unique().notNullable();
      table.string("resource_description");
    })
    .createTable("tasks", (table) => {
      table.increments("task_id");
      table.string("task_description").notNullable();
      table.string("task_notes", 128);
      table.boolean("task_completed").defaultTo(false);
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onDelete("RESTRICT");
    })
    .createTable("project_resources", (table) => {
      table.increments("project_resources");
      table
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects");
      table
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("resource_id")
        .inTable("resources");
    });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
