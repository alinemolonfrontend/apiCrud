const Route = use('Route')

Route.get('cities', 'CityController.index') 
Route.post('cities', 'CityController.store')

Route.get('cities/:id', 'CityController.show')
Route.put('cities/:id/', 'CityController.update')
Route.delete('cities/:id', 'CityController.destroy')