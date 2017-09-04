Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#home'

  get "/about" => "pages#about"

###

  get "/games/magic" => "games#magic"

  get "/games/magic/response" => "games#magic_response"


###

  get "games/rock_paper_scissors" => "games#rock_paper_scissors"

  get "/games/rock_paper_scissors/:throw" => "games#rock_paper_scissors_play"

end
