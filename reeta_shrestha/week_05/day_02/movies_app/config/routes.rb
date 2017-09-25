Rails.application.routes.draw do
  get '/movies' => 'movies#index'

  get '/movies/new' => 'movies#new', :as => 'movie_new'

  post '/movies' => 'movies#create'

  get '/movies/:id' => 'movies#show', :as => 'movie'

  post '/movies/:id/delete' => 'movies#destroy', :as => 'movie_delete'

  get '/movies/:id/edit' => 'movies#edit', :as => 'movies_edit'

  post '/movies/:id' => 'movies#update'


end
