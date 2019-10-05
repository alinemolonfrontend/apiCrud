const Route = use('Route')

Route.get('users', 'UsersController.index') 
Route.post('users', 'UsersController.store')

Route.get('users/:id', 'UsersController.show')
Route.put('users/:id', 'UsersController.update')
Route.delete('users/:id', 'UsersController.destroy')