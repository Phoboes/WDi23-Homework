class PagesController < ApplicationController

  def index

  end

  def show

  end

  def home
    @tweets = Tweet.all
  end

end
