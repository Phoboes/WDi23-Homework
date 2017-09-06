Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic_eight' => 'games#magic_eight'
  get '/magic_eight/lookup' => 'games#lookup'

  get '/secret_number' => 'games#secret_number'
  get '/secret_number/lookup' => 'games#lookup_number'

  get '/rock_paper_scissors' => 'games#rock_paper_scissors'
  get '/rock_paper_scissors/lookup' => 'games#lookup_rock_paper_scissors'


end
