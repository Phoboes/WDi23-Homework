Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic' => 'magic#game'

  get '/secret' => 'secret#form'
  get '/secret' => 'secret#result'

  get '/rps' => 'rps#game'
end
