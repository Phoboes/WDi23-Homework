class GamesController < ApplicationController
  def magic_eight
  end

  def lookup
    @question = params[:question]
    array = ['It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes definitely',
      'You may rely on it',
      'As I see it, yes',
      'Most likely',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      'Dont count on it',
      'My reply is no',
      'My sources say no',
      'Outlook not so good',
      'Very doubtful']
    @answer = array[rand(array.length).to_i]
  end

  def secret_number
  end

  def lookup_number
    rand_number = rand(1..10)
    @number = params[:number]
    if @number == rand_number
      @result = "You got it"
    else
      @result = "Try again"
    end
  end

  def rock_paper_scissors
  end

  def lookup_rock_paper_scissors
    array = ['rock', 'paper', 'scissors']
    @answer = array[rand(array.length).to_i].capitalize
    @throw = params[:throw].capitalize
    if @throw == @answer
      @result = "It's a tie"
    elsif @throw == 'rock' && @answer == 'scissors'
      @result = "You win!"
    elsif @throw == 'rock' && @answer == 'paper'
      @result = "You lose!"
    elsif @throw == 'paper' && @answer == 'rock'
      @result = "You win!"
    elsif @throw == 'paper' && @answer == 'scissors'
      @result = "You lose!"
    elsif @throw == 'scissors' && @answer == 'paper'
      @result = "You win!"
    elsif @throw == 'scissors' && @answer == 'rock'
      @result = "You lose!"
    end
  end
end
