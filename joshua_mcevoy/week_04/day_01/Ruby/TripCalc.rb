# Calculate a trip time and cost given inputs for
#
# distance
# km per ltr
# price per ltr
# speed in km per hour


print "How far are you travelling: "
dist = gets.to_i
print "what are the km/ltr: "
ltrg = gets.to_f
print "What is the current price per ltr: "
price = gets.to_f
print "What speed will you be travelling at: "
speed = gets.to_i

time = dist/speed
cost = dist/ltrg * price

puts "it will take you #{time} hr to get there"
puts "it will cost you $#{cost} to travel that far"
