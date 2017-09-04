class SecretnumbersController < ApplicationController

  def guess
  end


  def guessed
    # how often is it running? should I move this code outside of guessed method to have one secret_number number to check multiple times?
    guess = params[:guess].to_i
    secret_number = rand 0..2


    unless guess == secret_number
      render :guess_again
    end

    @answer = guess

  end
end
