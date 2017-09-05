require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord:: Base.establish_connection(
:adapter => 'sqlite3',
:database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR) #optional

class Artist < ActiveRecord::Base #mandatory
end

class Artwork < ActiveRecord::Base #mandatory
end

 get '/' do
   @artworks = Artwork.all
   erb :home
 end

#Artists
#index
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

#new
get '/artists/new' do
  erb :artists_new
end

#create
post '/artists' do #post request
  artist = Artist.new
  artist.name = params[:name]
  artist.medium = params[:medium]
  artist.style = params[:style]
  artist.country = params[:country]
  artist.years = params[:years]
  artist.image = params[:image]
  artist.save
  redirect to ("/artists/#{artist.id}") #get request
end

#SHOW
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end

#EDIT
get '/artists/:id/edit' do
#fetch the butterfly from the database
@artist = Artist.find params[:id]
erb :butterflies_edit
end

#UPDATE
post '/artists/:id' do
artist = Artist.find params[:id]
artist.name = params[:name]
artist.medium = params[:medium]
artist.style = params[:style]
artist.country = params[:country]
artist.years = params[:years]
artist.image = params[:image]
artist.save
  redirect to("/artists/#{artist.id}")
end

#DESTROY
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to('/artists')
end

#Artworks
#index
get '/artworks' do
  @artworks = Artwork.all
  erb :artworks_index
end

#new
get '/artworks/new' do
  erb :artworks_new
end

#create
post '/artworks' do #post request
  artwork = Artwork.new
  artwork.title = params[:title]
  artwork.artist = params[:artist]
  artwork.genre = params[:genre]
  artwork.year = params[:year]
  artwork.image = params[:image]
  artwork.save
  redirect to("/artworks/#{artwork[:id]}") #get request
end

#SHOW
get '/artworks/:id' do
  @artwork = Artwork.find params[:id]
  erb :artworks_show
end

#EDIT
get '/artworks/:id/edit' do
#fetch the butterfly from the database
@artwork = Artwork.find params[:id]
erb :artworks_edit
end

#UPDATE
post '/artworks/:id' do
artwork = Artwork.find params[:id]
artwork.title = params[:title]
artwork.artist = params[:artist]
artwork.genre = params[:genre]
artwork.year = params[:year]
artwork.image = params[:image]
artwork.save
  redirect to("/artworks/#{artwork.id}")
end


#DESTROY
get '/artworks/:id/delete' do
  artwork = Artwork.find params[:id]
  artwork.destroy
  redirect to('/artworks')
end

after do
  ActiveRecord::Base.connection.close
end
