const Route = use('Route')

Route.get('states', 'StateController.index') 
Route.post('states', 'StateController.store')

Route.get('states/:id', 'StateController.show')
Route.put('states/:id/', 'StateController.update')
Route.delete('states/:id', 'StateController.destroy')