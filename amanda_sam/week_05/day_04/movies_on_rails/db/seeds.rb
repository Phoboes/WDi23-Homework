# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Directors.destroy_all

Directors.create(:name => 'Christopher Nolan', :nationality => 'British-American', :dob => '1970/07/30', :award => 'Academy Award',
:image => 'https://vignette4.wikia.nocookie.net/marvel_dc/images/0/05/Christopher_Nolan.jpg/revision/latest?cb=20081213214405')



Movies.destroy_all

Movies.create(:title => 'Dunkirk', :year => '2017',
:genre => 'Thriller',
:image => 'http://www.gawlercinema.com.au/images/movies/83-dunkirk.jpg')
