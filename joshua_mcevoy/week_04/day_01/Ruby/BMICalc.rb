print "what is your weight? "
weight = gets.to_i
print "What is your height in cm? eg. 175: "
cm = gets.to_f

height = cm / 100
puts "#{height}"

bmi = (weight / height)/height

puts "Your BMI is #{bmi}kg/m2"
