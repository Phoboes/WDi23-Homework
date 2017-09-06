Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => 'games#home'

get '/games/magic8ball/:input' => 'games#magic8ball'
get '/games/secretnumber' => 'games#secretnumber'
get '/games/rockpaperscissors/:throw' => 'games#rockpaperscissors'
get '/games/secretnumber/answer' => 'games#secretnumberanswer'

end
