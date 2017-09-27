require "sinatra"
require "sinatra/reloader"
require "sqlite3"

get '/' do
  erb :home
end

# The index (list) of memes
get '/memes' do
  # Get the table from the database.
  @memes = query_db "SELECT * FROM memes"

  erb :memes_index
end

# Add a new meme
get '/memes/new' do
  erb :memes_new
end

post '/memes' do
  dank = 0
  if params[:dank] == "true"
    dank = 1
  end

  query_db "INSERT INTO memes (description, rating, dank, image) VALUES ('#{params['description']}', '#{params['rating']}', '#{dank}', '#{params['image']}')"

  redirect to('/memes')
end


# This loads the page which actually allows you to view the meme.
get '/memes/:id' do
  @meme = query_db "SELECT * FROM memes WHERE id=#{params['id']}"
  @meme = @meme.first

  erb :memes_show
end

get '/memes/:id/edit' do
  @meme = query_db "SELECT * FROM memes WHERE id=#{params['id']}"
  @meme = @meme.first

  erb :memes_edit
end

post '/memes/:id' do
  dank = 0
  if params[:dank] == "true"
    dank = 1
  end

  query_db "UPDATE memes SET description='#{params['description']}', rating='#{params['rating']}', dank='#{dank}', image='#{params['image']}' WHERE id=#{params['id']}"

  redirect to("/memes/#{params['id']}")
end

# Delete the meme
get '/memes/:id/delete' do
  # Delete the meme
  query_db "DELETE FROM memes WHERE id=#{params['id']}"

  #Redirect
  redirect to('/memes')
end


# This function just handles all of the opening and closing of database and just returns what the database returns.
def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql # Optional but nice for debugging.

  results = db.execute sql
  db.close

  return results
end
