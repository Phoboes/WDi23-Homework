require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'


get '/' do
	@albums = query_db "SELECT * FROM albums"
	p @albums
	erb :home
end

get '/albums' do
	@albums = query_db "SELECT * FROM albums"

	erb :albums_index
end

post '/albums' do
	query_db "INSERT INTO albums (title, artist, year, label, image) VALUES ('#{params['title']}', '#{params['artist']}', '#{params['year']}', '#{params['label']}', '#{params['image']}')"
	redirect to("/albums")
end

get '/albums/new' do
	erb :albums_new
end

get '/albums/:id' do
	@albums = query_db "SELECT * FROM albums WHERE id=#{params['id']}"
	@albums = @albums.first
	erb :albums_show
end

def query_db(sql)
	db = SQLite3::Database.new 'database.sqlite3'
	db.results_as_hash = true
	results = db.execute sql
	db.close
	results
end


get '/albums/:id/edit' do
	@albums = query_db "SELECT * FROM albums WHERE id=#{params['id']}"
	@albums = @albums.first
	erb :albums_edit
end

post '/albums/:id' do
	query_db "UPDATE albums SET title='#{params['title']}', artist='#{params['artist']}', year='#{params['year']}', label='#{params['label']}', image='#{params['image']}' WHERE id=#{params['id']}"
	redirect to("/albums/#{params[:id]}")
end

get '/albums/:id/delete' do
	query_db "DELETE FROM albums WHERE id=#{params['id']}"
	redirect to('/albums')
end
