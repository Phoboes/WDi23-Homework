require 'sinatra'
require "sinatra/reloader"
require 'httparty'

get '/' do
  erb :form
end

get '/search' do
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{params[:book]}"
  info = HTTParty.get url

  @img = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :search
end
