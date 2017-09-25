Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'eightball#home'

  get '/home' => 'eightball#home'

  get '/ask' => 'eightball#ask'

  get '/show' => 'eightball#show'


  get '/guess' => 'secretnumbers#guess'
  get'/guessed' => 'secretnumbers#guessed'

  get '/rock' => 'rock#rock'
  get '/result' => 'rock#result'

end
