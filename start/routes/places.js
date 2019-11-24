const Route = use('Route')

Route.get('places', 'PlaceController.index') 
Route.post('places', 'PlaceController.store')

Route.get('places/:id', 'PlaceController.show')
Route.put('places/:id/', 'PlaceController.update')
Route.delete('places/:id', 'PlaceController.destroy')