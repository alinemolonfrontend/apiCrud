'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddFieldAtSchema extends Schema {
  up () {
    this.alter('places', (table) => {
      // alter table
      table.integer('user_id');

    })
  }

  down () {
    this.alter('places', (table) => {
      // reverse alternations
      table.dropColumn('user_id');
    })
  }
}

module.exports = AddFieldAtSchema
