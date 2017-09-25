# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all
Ocean.destroy_all

Mountain.create :name=> 'Mount Kilimanjaro', :location=>"Tanzania", :elevation=>5895, :prominence=>5885, :isolation=>	5510
Mountain.create :name=> 'Mount Kosciuszko', :location=>"Australia", :elevation=>2228, :prominence=>2228, :isolation=>	1894.26

Ocean.create :name => 'Indian Ocean'
Ocean.create :name => 'Pacific Ocean'
Ocean.create :name => 'Arctic Ocean'
