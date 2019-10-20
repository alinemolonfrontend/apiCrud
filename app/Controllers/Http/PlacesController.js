'use strict'

const Place = use('App/Models/Place');

class PlacesController {

    async index ({ request, response}){
        return await Place.query().paginate(1)
    }

    async show ({ params }){
        return await Place.findOrFail(params.id)
    }

    async store ({ request, response}){
        const placeData = request.only(['name', 'address', 'description', 'price', 'type', 'lat', 'long', 'user_id'])  
        return await Place.create(placeData)
    }

    async update ({ request, params, response }){
        const placeData = request.only(['name', 'address', 'description', 'price', 'type', 'lat', 'long', 'user_id'])
        const place = await Place.find(params.id)

        place.name = placeData.name
        place.address = placeData.address
        place.description = placeData.description
        place.price = placeData.price
        place.type = placeData.type
        place.lat = placeData.lat
        place.long = placeData.long

        await place.save()
        return place
    }

    async destroy ({ params, response}){
        const place = await Place.findOrFail(params.id)

        if(!place.id){
            return response.status(401).send({ error: 'Not authorized' })
        }

        await place.delete()
        return 'true'

    }
    
}

module.exports = PlacesController