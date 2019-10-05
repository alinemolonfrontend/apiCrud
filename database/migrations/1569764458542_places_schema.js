'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlacesSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()

      table.string('name', 80).notNullable();
      table.string('address').notNullable();
      table.string('description', 400).notNullable();
      table.float('price', 7).notNullable();
      table.string('type').notNullable();
      table.decimal('lat').notNullable();
      table.decimal('long').notNullable();

      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlacesSchema

  
