require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
	erb :form
end

get '/lookup' do
	redirect to('/') unless params[:book]
	@book_title = params[:book]
	url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
	@info = HTTParty.get url
	@lookup = @info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
	@description = @info["items"].first["volumeInfo"]["description"]
	erb :lookup
end

get '/about' do
	erb :about
end

get '/faq' do
	erb :faq
end
