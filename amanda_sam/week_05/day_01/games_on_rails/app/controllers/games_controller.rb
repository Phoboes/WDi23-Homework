class GamesController < ApplicationController

  # ----------------------------------------------------------------------------


  def magic
    @shake = params["q"]
  end

  def magic_response

      ball_response =
      ["Hey, don't worry about it. There are other things way more important."
        "It is certain",
        "Yes definitely",
        "You may rely on it",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Don't count on it",
        "No",
        "My sources say no",
        "Very doubtful"]
      @response = ball_response.sample()
      @shake = params["q"]
  end


  # ----------------------------------------------------------------------------


  def rock_paper_scissors
  end

  def rock_paper_scissors_play
  end

  end

end
