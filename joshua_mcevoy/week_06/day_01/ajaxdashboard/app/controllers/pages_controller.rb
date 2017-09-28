class PagesController < ApplicationController
  def index
    @brother = %w{ Groucho Harpo Chico Zeppa Gummo }.sample
    @time = Time.now
    @uptime = `uptime` #back ticks will run the iterm function
  end
end
