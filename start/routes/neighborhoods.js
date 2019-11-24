const Route = use('Route')

Route.get('neighborhoods', 'NeighborhoodController.index') 
Route.post('neighborhoods', 'NeighborhoodController.store')

Route.get('neighborhoods/:id', 'NeighborhoodController.show')
Route.put('neighborhoods/:id/', 'NeighborhoodController.update')
Route.delete('neighborhoods/:id', 'NeighborhoodController.destroy')