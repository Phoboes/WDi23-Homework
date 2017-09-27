require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

ActiveRecord::Base.establish_connection(
:adapter => 'sqlite3',
:database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
	belongs_to :author
end

class Author < ActiveRecord::Base
	has_many :books
end

get '/' do
	erb :home
end

# INDEX
get '/books' do
	@books = Book.all
	erb :books_index
end

post '/books' do
	book = Book.new
	book.name = params[:name]
	book.family = params[:family]
	book.image = params[:image]
	book.save
	redirect to("/books/#{book[:id]}")
end

# NEW
get '/books/new' do
	erb :books_new
end

# SHOW
get '/books/:id' do
	@books = Book.find params[:id]
	erb :books_show

end

# def query_db(sql)
# 	db = SQLite3::Database.new 'database.sqlite3'
# 	db.results_as_hash = true
# 	puts sql
# 	results = db.execute sql
# 	db.close
# 	results
# end

# EDIT
get'/books/:id/edit' do
	@book = Book.find params[:id]
	erb :books_edit
end

# UPDATE
post '/books/:id' do
	book = Book.find params[:id]
	book.title = params[:title]
	book.author = params[:author]
	book.published = params[:published]
	book.image = params[:image]
	book.save
	redirect to("/books/#{params[:id]}")
end

get '/books/:id/delete' do
	book = Book.find params[:id]
	book.destroy
	redirect to('/books')
end

# INDEX
get '/authors' do
	@authors = Author.all
	erb :authors_index
end

# before do
# 	@families = Butterfly.pluck(:family).uniq
# end

# NEW
get '/authors/new' do
	erb :authors_new
end

# CREATE
post '/authors' do
	author = author.new
	author.name = params[:name]
	author.save
	redirect to("/authors/#{author.id}")
end

# SHOW
get '/authors/:id' do
	@author = Author.find params[:id]
	erb :authors_show
end

get '/authors/:id/edit' do
	@author = Author.find params[:id]
	erb :authors_edit
end

post '/authors/:id' do
	author = Author.find params[:id]
	author.name = params[:name]
	author.save
	redirect to("/authors/#{author.id}")
end

# DESTROY
get '/authors/:id/delete' do
	author = Author.find params[:id]
	author.destroy
	redirect to('/authors')
end

after do
	ActiveRecord::Base.connection.close
end
