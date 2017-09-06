Rails.application.routes.draw do

  root to: 'mountains#home'

  # MOUNTAINS
  # INDEX
  get 'mountains' => 'mountains#index'
  # NEW
  get 'mountains/new' => 'mountains#new', as: 'new_mountains'
  # CREATE
  post 'mountains' => 'mountains#create'
  # SHOW
  get 'mountains/:id' => 'mountains#show', as: 'mountain'
  # EDIT
  get 'mountains/:id/edit' => 'mountains#edit', as: 'edit_mountain'
  # UPDATE
  patch 'mountains/:id' => 'mountains#update'
  # DESTROY
  post 'mountain/:id/delete' => 'mountains#destroy', as: 'delete_mountain'

  get 'home' => 'mountains#home', as: 'home'
end
