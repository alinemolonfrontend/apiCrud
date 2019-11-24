'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StatesSchema extends Schema {
  up () {
    this.create('states', (table) => {
      table.increments()
      table.string('name', 80).notNullable();
      table.string('initials', 2).notNullable();
      table.timestamps()
    })
  }

  down () {
    this.drop('states')
  }
}

module.exports = StatesSchema
