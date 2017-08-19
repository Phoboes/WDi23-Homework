require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
#
# require all models
Dir["models/*.rb"].each do |file|
    require_relative file
end

# CLASS HERO
# CLASS VILLAIN
# CLASS PUBLISHER
# JOIN publisher_id: int

ActiveRecord::Base.establish_connection(
    adapter: 'sqlite3',
    database: 'development.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

# Routes
# GENERAL
get '/' do

    erb :index
end

# CLASS INDEX
get '/heroes' do
    @heroes = Hero.all

    erb :heroes_index
end

get '/villains' do
    @villains = Villain.all

    erb :villains_index
end

get '/publishers' do
    @publishers = Publisher.all

    erb :publishers_index
end

# HEROES ROUTES

get '/heroes/new' do
    @publishers = Publisher.all

    erb :heroes_new
end

# SHOW
get '/heroes/:id' do
    @hero = Hero.find params[:id]

    erb :heroes_show
end

# CREATE
post '/heroes' do
    puts params
    hero = Hero.create name: params[:name], description: params[:description], powers: params[:powers], rating: params[:rating], publisher_id: params[:publisher_id]

    redirect to("/heroes/#{hero.id}")
end

# UPDATE
post '/heroes/:id' do
    hero = Hero.find params[:id]
    hero.update name: params[:name], description: params[:description], powers: params[:powers], rating: params[:rating], publisher_id: params[:publisher_id]

    redirect to("/heroes/#{hero.id}")
end

# EDIT
get '/heroes/:id/edit' do
    @hero = Hero.find params[:id]
    @publishers = Publisher.all

    erb :heroes_edit
end

# DESTROY
get '/heroes/:id/delete' do
    hero = Hero.find params[:id]
    hero.destroy

    redirect to('/heroes')
end

# only required in Sinatra to close connection
after do
    ActiveRecord::Base.connection.close
end

helpers do
    def check_path
        request.path_info
    end
end
