class GamesController < ApplicationController

  def magic8ball
    @input = params[:input]
    @number = rand(0..19);
    @answers = ["It is certain", "It is decidedly so", 'Without a doubt','Yes definitely','You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', "Very doubtful"];
    @answer = @answers[@number]
  end

  def secretnumber
  end

  def secretnumberanswer
    @number = rand(0..1)
    if @number == 0
      @answer = 'YOU WIN'
    else @answer ="YOU LOSE"
    end
  end

  def rockpaperscissors
    @throw = params[:throw].downcase.to_str
    @number = rand(0..2)
    @throws = ['rock', 'paper', 'scissors']
    @compthrow = @throws[@number]
    if @throw == @compthrow
      @winner = 'Its a tie!'
    elsif @throw == 'rock' && @compthrow == 'paper'
      @winner = 'Computer Wins!'
    elsif @throw == 'rock' && @compthrow == 'scissors'
      @winner = 'User Wins!'
    elsif @throw == 'paper' && @compthrow =='scissors'
      @winner = "Computer Wins!"
    elsif @throw == 'paper' && @compthrow == 'rock'
      @winner = "User Wins!"
    elsif @throw == 'scissors' && @compthrow == "paper"
      @winner = "User Wins!"
    elsif @throw == "scissors" && @compthrow == "rock"
    @winner = "Computer Wins!"
  elsif @throw != "scissors" || "paper" || "rock"
    @throw = "YOU DID NOT ENTER A VALID THROW, TRY AGAIN"
    @winner = "YOU DID NOT ENTER A VALID THROW, TRY AGAIN"
    end
  end
end
