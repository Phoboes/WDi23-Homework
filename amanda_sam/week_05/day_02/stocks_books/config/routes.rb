Rails.application.routes.draw do
  # For details on the DSL available within this file,
  # see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#home' # Defines the / root of the site (homepages)

  # get '/home' => 'pages#home'
  get '/stocks' => 'stocks#form' # Pages Controller, home action

  # get '/faq' => 'pages#faq'
  get '/stocks/lookup' => 'stocks#lookup'

  get '/books' => 'books#form'
  get '/books/lookup' => 'books#lookup'

  get '/8ball' => 'guesses#ask'
end
