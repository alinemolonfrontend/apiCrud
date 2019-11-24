'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class City extends Model {

    neighborhoods() {
        return this.hasMany('App/Models/Neighborhood')
    }
}


module.exports = City
