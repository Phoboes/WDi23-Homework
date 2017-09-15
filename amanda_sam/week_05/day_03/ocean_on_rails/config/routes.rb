Rails.application.routes.draw do
  # For details on the DSL available within this file,
  # see http://guides.rubyonrails.org/routing.html


  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new', :as => 'ocean_new'

  post '/oceans' => 'oceans#create'

  get '/oceans/:id' => 'oceans#show', :as => 'ocean'

  post '/oceans/:id/delete' => 'oceans#destroy', :as => 'ocean_delete'

  get '/oceans/:id/edit' => 'oceans#edit', :as => 'ocean_edit'

  post '/oceans/:id' => 'oceans#update'

end
