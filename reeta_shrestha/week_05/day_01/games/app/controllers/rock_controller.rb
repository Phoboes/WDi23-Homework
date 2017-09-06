class RockController < ApplicationController
  def rock
  end

  def result
    @player = params[:player_choice]
    @random = ["Rock", "Paper", "Scissors"].sample(1).join('')

    #    PLAYER    RANDOM  OUTCOME
    #
    #      ROCK      ROCK     DRAW
    #      ROCK     PAPER    LOOSE
    #      ROCK  SCISSORS      WIN
    #     PAPER      ROCK      WIN
    #     PAPER     PAPER     DRAW
    #     PAPER  SCISSORS    LOOSE
    #  SCISSORS      ROCK    LOOSE
    #  SCISSORS     PAPER      WIN
    #  SCISSORS  SCISSORS     DRAW

  @result = case @player
  when 'Rock'
    case @random
    when 'Rock' then "It's a Draw"
    when 'Paper' then 'You Loose'
      when 'Scissors' then 'You Win'
    end
    when 'Paper'
      case @random
      when 'Rock' then 'You Win'
        when 'Paper' then "It's a Draw"
        when 'Scissors' then 'You Loose'
      end
    when 'Scissors'
      case @random
      when 'Rock' then 'You Loose'
        when 'Paper' then 'You Win'
        when 'Scissors' then "It's a Draw"
      end
    end
  end
end
