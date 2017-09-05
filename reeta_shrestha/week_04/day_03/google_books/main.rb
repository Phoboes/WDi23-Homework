require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :form
end

get '/book' do
  redirect to('/') unless params[:title]

  title = params[:title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ title }"
  info = HTTParty.get url

  item = info["items"].first


  @cover_image = item["volumeInfo"]["imageLinks"]["thumbnail"]
  @google_book_title = item["volumeInfo"]["title"]
  @authors = item["volumeInfo"]["authors"].join(', ')

  @country = item["saleInfo"]["country"]

  if item["saleInfo"]["listPrice"]
    amount = item["saleInfo"]["listPrice"]["amount"].to_s
    currency = item["saleInfo"]["listPrice"]["currencyCode"]
    @price = "#{amount} #{currency}"
  else
    @price = "Not for Sale"
  end

  @publisher = item["volumeInfo"]["publisher"]
  @total_results = info["totalItems"]
  @rating = item["volumeInfo"]["maturityRating"]

  erb :book

end
