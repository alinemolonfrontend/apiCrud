const Route = use('Route')

Route.get('places', 'PlacesController.index') 
Route.post('places', 'PlacesController.store')

Route.get('places/:id', 'PlacesController.show')
Route.put('places/:id/', 'PlacesController.update')
Route.delete('places/:id', 'PlacesController.destroy')