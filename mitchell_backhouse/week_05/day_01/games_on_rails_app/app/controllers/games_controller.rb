class GamesController < ApplicationController
  def index
    logger.info(params)

  end

  def eightball
    responses = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
    ]

    logger.info("The params are: #{params}")

    @response = responses.sample
  end

  def secretnumber
    # Set this with session data
    if params.include? "clearnumber" 
      new_rand
      logger.info("NEW NUMBER: #{session[:secretnumber]}")
    end

    set_session

    secretnumber = session[:secretnumber]

    guess = params[:guess].to_i

    case
    when guess == secretnumber
      @response = "You Win"
    when guess < secretnumber
      @response = "Too Low"
    when guess > secretnumber
      @response = "Too High"
    end 

  end

  def rockpaperscissor
    # rock paper scissors lizzard spock
    @gameVal = ['rock', 'paper', 'scissors'].sample

    p = params[:guess]

    case
    # ROCK
    when p == @gameVal
      @response = "It's a draw"
    when p == 'rock' && @gameVal == 'rock'
      @response = "Rock is the same as Rock - It's a Tie"
    when p == 'rock' && @gameVal == 'paper'
      @response = "Paper beats Rock - You Lose"
    when p == 'rock' && @gameVal == 'scissors'
      @response = "Rock breaks Scissors - You Win"
    when p == 'rock' && @gameVal == 'lizzard'
      @response = "Rock crushes Lizzard - You Win"
    when p == 'rock' && @gameVal == 'spock'
      @response = "Spock vaporises Rock - You Lose"
    # PAPER
    when p == 'paper' && @gameVal == 'rock'
      @response = "Paper beats Rock - You Win"
    when p == 'paper' && @gameVal == 'paper'
      @response = "Paper is the same as Paper - It's a Tie"
    when p == 'paper' && @gameVal == 'scissors'
      @response = "Scissors cuts Paper - You Lose"
    when p == 'paper' && @gameVal == 'lizzard'
      @response = "Lizzard eats Paper - You Lose"
    when p == 'paper' && @gameVal == 'spock'
      @response = "Paper disproves Spock - You Win"
    # SCISSORS
    when p == 'scissors' && @gameVal == 'rock'
      @response = "Rock breaks Scissors - You Lose"
    when p == 'scissors' && @gameVal == 'paper'
      @response = "Scissors cuts Paper - You Win"
    when p == 'scissors' && @gameVal == 'scissors'
      @response = "Scissors is equal to Scissors - It's a Tie"
    when p == 'scissors' && @gameVal == 'lizzard'
      @response = "Scissors cuts the head off Lizzard - You Win"
    when p == 'scissors' && @gameVal == 'spock'
      @response = "Spock smashes Scissors - You Lose"
    # LIZZARD
    when p == 'lizzard' && @gameVal == 'rock'
      @response = "Rock crushes Lizzard - You Lose"
    when p == 'lizzard' && @gameVal == 'paper'
      @response = "Lizzard eats Paper - You Win"
    when p == 'lizzard' && @gameVal == 'scissors'
      @response = "Scissors cuts the head off Lizzard - You Lose"
    when p == 'lizzard' && @gameVal == 'lizzard'
      @response = "Lizzard is equal to Lizzard - It's a Tie"
    when p == 'lizzard' && @gameVal == 'spock'
      @response = "Lizzard poisons Spock - You Win"
    # SPOCK
    when p == 'spock' && @gameVal == 'rock'
      @response = "Spock vaporises Rock - You Win"
    when p == 'spock' && @gameVal == 'paper'
      @response = "Paper disproves Spock - You Lose"
    when p == 'spock' && @gameVal == 'scissors'
      @response = "Spock smashes Scissors - You Win"
    when p == 'spock' && @gameVal == 'lizzard'
      @response = "Lizzard poisons Spock - You Lose"
    when p == 'spock' && @gameVal == 'spock'
      @response = "Spock is equal to Spock - It's a Tie"
    end

    logger.info(params)
  end

  private

  def set_session
    if session[:secretnumber]
      secretnumber = session[:secretnumber]
    else
      session[:secretnumber] = rand(1..10)
    end
  end

  def new_rand
    session.clear
    session[:secretnumber] = rand(1..10)
  end
end
