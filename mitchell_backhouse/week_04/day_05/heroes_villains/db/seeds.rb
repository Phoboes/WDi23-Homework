# Publisher
puts "\nSetting Up Publishers\n"
Publisher.create(name: "DC Comics")
Publisher.create(name: "Marvel Comics")

Publisher.all.each{ |p| puts "Created: #{p.name}" }

# Heroes
puts "\nSetting Up Heroes\n"
Hero.create(name: "Superman", description: "NERD", powers: "Seemingly all of them", rating: 3, publisher_id: 1)

Hero.all.each{ |p| puts "Created: #{p.name}" }
# Villains
puts "\nSetting Up Villains\n"
