'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitiesSchema extends Schema {
  up () {
    this.create('cities', (table) => {
      table.increments()
      table.integer('state_id');
      table.string('name', 80).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitiesSchema
