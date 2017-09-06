require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

#INDEX
get '/doggos' do
  @doggos = query_db "SELECT * FROM doggos"
  erb :doggos_index
end

#NEW
get '/doggos/new' do
  erb :doggos_new
end

#CREATE
post '/doggos' do
  query_db "INSERT INTO doggos (breed, size, nickname, furcolour, image) VALUES ('#{ params["breed"] }', '#{ params["size"] }', '#{ params["nickname"] }', '#{ params["furcolour"] }', '#{ params["image"] }')"
  # redirect them to the butterflies INDEX
  redirect to ('/doggos') #get request
end

#SHOW
get '/doggos/:id' do
  @doggos = query_db "SELECT * FROM doggos WHERE id=#{params[:id]}"
  @doggos = @doggos.first
  erb :doggos_show
end

#EDIT
get '/doggos/:id/edit' do
@doggos = query_db "SELECT * FROM doggos WHERE id=#{params[:id]}"
@doggos = @doggos.first
erb :doggos_edit
end

#UPDATE
post '/doggos/:id' do
  query_db "UPDATE doggos SET breed='#{ params["breed"] }', size ='#{ params["size"] }', nickname='#{ params["nickname"] }', furcolour='#{ params["furcolour"] }', image='#{ params["image"] }' WHERE id=#{params['id']}"
  redirect to("/doggos/#{params[:id]}")
end

#DESTROY
get '/doggos/:id/delete' do
  query_db "DELETE FROM doggos WHERE id=#{params[:id]}"
  redirect to('/doggos')
end


def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql #optional but nice for debugging

  results = db.execute sql
  db.close
  results #implicit return
end
