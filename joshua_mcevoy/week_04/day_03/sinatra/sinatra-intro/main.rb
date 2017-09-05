require "sinatra"
require "sinatra/reloader"


get '/' do
  "This is the homepage."
end

get '/hello' do
  "Hello world from Sinatra"
end

get '/tegan' do
  "Hello Tegan"
end

get '/kate' do
  "Hello Kate"
end

get '/brydie' do
  "Hello brydie"
end

get '/family/:name' do
  "Hello #{params[:name]}"
end

get '/name/:first' do
  "Your name is #{params[:first].capitalize}"
end

get '/name/:first/:last' do
  "Your name is #{params[:first].capitalize} #{params[:last].upcase}"
end

get '/name/:first/:last/:age' do
  "Your name is #{params[:first].capitalize} #{params[:last].upcase} and your age is #{params[:age]}"
end

get '/multiply/:x/:y'do
  result = params[:x].to_f * params[:y].to_f
  "the result is #{result}"
end
