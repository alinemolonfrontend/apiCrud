'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NeighborhoodsSchema extends Schema {
  up () {
    this.create('neighborhoods', (table) => {
      table.increments()
      table.integer('city_id');
      table.string('name', 80).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('neighborhoods')
  }
}

module.exports = NeighborhoodsSchema
