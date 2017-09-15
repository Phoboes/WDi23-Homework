require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# root

get '/' do
  redirect to("/seeds")
end

# index
get '/seeds' do
  @seeds = query_db "SELECT * FROM seeds"
  erb :seeds_index
end

# new
get '/seeds/new' do
  erb :seeds_new
end

# create
post '/seeds' do
  query_db "INSERT INTO seeds (name, color, image, interest) VALUES ('#{params['name']}', '#{params['color']}', '#{params['image']}', '#{params['interest']}')"

  redirect to('/seeds')
end

# show
get '/seeds/:id' do
  @seed = query_db "SELECT * FROM seeds WHERE id=#{params['id']}"
  @seed = @seed.first
  erb :seeds_show
end

# edit
get '/seeds/:id/edit' do
  @seed = query_db "SELECT * FROM seeds WHERE id=#{params['id']}"
  @seed = @seed.first
  erb :seeds_edit
end

# update
post '/seeds/:id' do
  query_db "UPDATE seeds SET name='#{params['name']}', color='#{params['color']}', image='#{params['image']}', interest='#{params['interest']}' WHERE id=#{params['id']}"

  redirect to("/seeds/#{params['id']}")
end

# delete
get '/seeds/:id/delete' do
  query_db "DELETE FROM seeds WHERE id=#{params['id']}"
  redirect to('/seeds')
end

# db connect to ruby
def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql # Optional but nice for debugging.

  results = db.execute sql
  db.close
  results # Implicit return
end
