Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root :to => 'pages#home'

	get 'home' => 'pages#home'

	get '/magic_eight_ball' => 'pages#magic_eight_ball'

	get '/magic_eight_ball/result' => 'magic_eight_ball#result'


end
