require "sinatra"
require "sinatra/reloader"
require "sqlite3"

#HOME
get '/' do
  erb :home
end

#INDEX
get '/orchids' do
  @orchids = query_db "SELECT * FROM orchids"
  erb :orchids_index
end

#ADD
get '/orchids/new' do
  erb :orchids_new
end

#CREATE
post '/orchids' do
  query_db "INSERT INTO orchids (name, genus, image) VALUES ('#{params["name"]}', '#{params['genus']}', '#{params['image']}', '#{ params['description']}')"
  redirect to('orchids')
end

#DELETE
get '/orchids/:id/delete' do
  query_db "DELETE FROM orchids WHERE id=#{ params[:id ]}"
  redirect to('/orchids')
end

#EDIT
get '/orchids/:id/edit' do
  @orchid = query_db "SELECT * FROM orchids WHERE id=#{params[:id]}"
  @orchid = @orchid.first
  erb :orchids_edit
end

#UPDATE
post '/orchids/:id' do
  query_db "UPDATE orchids SET name='#{ params['name']}', genus='#{ params['genus']}', image='#{ params['image']}', description='#{ params['description'] }' WHERE id=#{ params[:id]}"
  redirect to("/orchids/#{ params[:id] }")
end

#SHOW
get '/orchids/:id' do
  @orchid = query_db "SELECT * FROM orchids WHERE id=#{params['id']}"
  @orchid = @orchid.first
  erb :orchids_show
end

# method to get the data from the database and return result
def query_db(sql)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql
  results = db.execute sql
  db.close
  results
end
