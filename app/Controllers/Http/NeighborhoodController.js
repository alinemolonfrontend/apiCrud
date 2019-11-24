'use strict'

const Neighborhood = use("App/Models/Neighborhood");

class NeighborhoodController {

    async index (){
        return await Neighborhood.query().paginate();
    }

    async show ({ params }){
        return await Neighborhood.findOrFail(params.id)
    }

    async store ({ request }){
        const neighborhoodData = request.only(['name', 'city_id'])  
        return await Neighborhood.create(neighborhoodData)
    }

    async update ({ request, params}){
        const neighborhoodData = request.only(['name', 'city_id'])
        const neighborhood = await Neighborhood.find(params.id)

        neighborhood.name = neighborhoodData.name
        neighborhood.address = neighborhoodData.address

        await neighborhood.save()
        return neighborhood
    }

    async destroy ({ response, params }){
        const neighborhood = await Neighborhood.findOrFail(params.id)

        if(!neighborhood.id){
            return response.status(401).send({ error: 'Not authorized' })
        }

        await neighborhood.delete()
        return 'true'
    }

}

module.exports = NeighborhoodController
