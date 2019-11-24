'use strict'

const City = use('App/Models/City');

class CityController {

    async index (){
        return await City.query().paginate();
    }

    async show ({ params }){
        return await City.findOrFail(params.id)
    }

    async store ({ request }){
        const cityData = request.only(['name', 'state_id'])  
        return await City.create(cityData)
    }

    async update ({ request, params}){
        const cityData = request.only(['name', 'state_id'])
        const city = await City.find(params.id)

        city.name = cityData.name
        city.address = cityData.address

        await city.save()
        return city
    }

    async destroy ({ response, params }){
        const city = await City.findOrFail(params.id)

        if(!city.id){
            return response.status(401).send({ error: 'Not authorized' })
        }

        await city.delete()
        return 'true'
    }
    
}

module.exports = CityController
