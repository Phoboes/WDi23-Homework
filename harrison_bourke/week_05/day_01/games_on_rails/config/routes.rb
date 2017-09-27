Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#index'

  get '/8ball' => 'eight_ball#index'
  get '/8ball/answer_q' => 'eight_ball#answer'
end
