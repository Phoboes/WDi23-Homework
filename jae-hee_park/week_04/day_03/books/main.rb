require 'httparty'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb:form
end


get '/books' do
  redirect to ('/') unless params[:book_name]

  book = params[:book_name]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book}"
  info = HTTParty.get url
  @title = info["items"].first["volumeInfo"]["title"].upcase
  @cover_image = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
    erb :books
end

get '/textsoup' do
  book = params[:book_name]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{book}"
  info = HTTParty.get url
  @text = info["items"].first["volumeInfo"]["description"].split(" ")
    erb :textsoup
end


# title = "Ulysses"
# url = "https://www.googleapis.com/books/v1/volumes?q=title:#{title}"
# info = HTTParty.get url
# @cover_image = info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
