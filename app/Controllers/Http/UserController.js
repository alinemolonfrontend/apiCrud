'use strict'

const User = use('App/Models/User');

class UserController {

    async index (){
        return await User.query().with('places').paginate(1)
    }

    async show ({ params }){
        return await User.findOrFail(params.id)
    }

    async store ({ request }){
        const userData = request.only(['username', 'email', 'password', 'gender'])
        return await User.create(userData)
    }

    async update ({ request, params }){
        const userData = request.only(['username', 'email', 'password', 'gender', 'id'])
        const user = await User.find(params.id)

        user.email = userData.email
        user.username = userData.username
        user.password = userData.password

        await user.save()
        return user
    }

    async destroy ({ params, response}){
        const user = await User.findOrFail(params.id)

        if(!user.id){
            return response.status(401).send({ error: 'Not authorized' })
        }

        await user.delete()
        return 'true'

    }

}

module.exports = UserController
