require "YahooFinance"
require 'sinatra'
require 'sinatra/reloader'
require "pry"

get '/' do
  erb :form
end

get '/stock' do
  # redirect to ('/') unless params[:stock]
  @stocks = params[:stock_symbol]
  info=YahooFinance:: get_quotes(YahooFinance::StandardQuote, @stocks)
  @result = info[@stocks].lastTrade
  erb :stock

end

get '/about' do
  erb :about
end

get '/faq' do
  erb :faq
end
