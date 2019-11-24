'use strict'

const State = use("App/Models/State")

class StateController {

    async index (){
        return await State.query().paginate( 1, 27 );
    }

    async show ({ params }){
        return await State.findOrFail(params.id)
    }

    async store ({ request }){
        const stateData = request.only(['name', 'initials'])  
        return await State.create(stateData)
    }

    async update ({ request, params}){
        const stateData = request.only(['name', 'initials'])
        const state = await State.find(params.id)

        state.name = stateData.name
        state.address = stateData.address

        await state.save()
        return state
    }

    async destroy ({ response, params }){
        const state = await State.findOrFail(params.id)

        if(!state.id){
            return response.status(401).send({ error: 'Not authorized' })
        }

        await state.delete()
        return 'true'
    }

}

module.exports = StateController
