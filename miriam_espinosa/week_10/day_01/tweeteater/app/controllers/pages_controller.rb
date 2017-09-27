class PagesController < ApplicationController
  def index

  end

  def home
    @tweets = Tweet.all
    # system "rake :search", params[:query]
  end
end
