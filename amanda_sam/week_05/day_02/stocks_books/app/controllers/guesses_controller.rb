class GuessesController < ApplicationController
  def ask
    @answer = ";)"
  end
end



## THINKING STAGE:

# at routes.rb --> get '/8ball' => 'guesses#ask'

# in guesses_controller.rb --> then go to views/guesses/ask.html.erb
# create an array:
# [, , , , , ]
# something.sample() --> a random value
