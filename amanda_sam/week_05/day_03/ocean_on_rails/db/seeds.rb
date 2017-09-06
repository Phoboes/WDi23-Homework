# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Ocean.destroy_all
# Make sure there is no repeats of data --> Most recent file


Ocean.create :name => 'Pacific Ocean', :area => 'Pacific', :depth => 4280
Ocean.create :name => 'Atlantic Ocean', :area => 'Atlantic', :depth => 3646
Ocean.create :name => 'Indian Ocean', :area => 'Indian', :depth => 3741
Ocean.create :name => 'Southern Ocean', :area => 'Southern', :depth => 5000
Ocean.create :name => 'Arctic Ocean', :area => 'Arctic', :depth => 1250

# then go to iterm --> $ rails db:seed
