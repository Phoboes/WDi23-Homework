Rails.application.routes.draw do

  root to: 'games#index'

  get 'eightball' => 'games#eightball'
  get 'secretnumber' => 'games#secretnumber'
  get 'rockpaperscissor' => 'games#rockpaperscissor'
end
