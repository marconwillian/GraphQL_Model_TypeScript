import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
    return knex.schema
    .createTable('user', ( table:Knex.CreateTableBuilder ) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.timestamps(true,true);
    })
    .createTable('teste', ( table:Knex.CreateTableBuilder ) => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.integer('owner_id').references("user.id").onDelete("CASCADE");
        table.timestamps(true,true);
    })
}


export async function down(knex: Knex): Promise<any> {
}

