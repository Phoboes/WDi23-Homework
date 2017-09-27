# ###1. Drinking age?
#
# Ask the user for their age.
# Remember that anytime you get input, it is a string, so you will need to change the age input to a number.
# If age is less than 18, print an appropriate message.
# If the age is equal to or over 18, print a different message.
#
# print "what is your age? "
# age = gets.chomp
#
# if age.to_i >= 18
#   puts "you can drink"
# else
#   puts "you can't drink"
# end



# Air Conditioning
#
# Ask the user what the current temperature is, if the A/C is functional, and what temperature they wish it was.
# If the airconditioner is functional and the current temperature is above the the desired temperature... display "Turn on the A/C Please"
# If the airconditioner is non-functional and the current temperature is above the the desired temperature... display "Fix the A/C now! It's hot!"
# If the airconditioner is non-functional and the current temperature is below the the desired temperature... display "Fix the A/C whenever you have the chance... It's cool..."


# puts "What is the current temp? "
# current_temperature = gets.to_f
# puts "Is the A/C turned on? (y/n):"
# functional_ac = gets.chomp
# puts "What temp do you want it to be? "
# desired_temperature = gets.to_f
#
# # temp_diff = current_temp - set_temp
#
# if functional_ac == 'y'
#   puts "Turn on the A/C Please" if current_temperature > desired_temperature
# else
#   if current_temperature > desired_temperature
#     puts "fix the A/C now! It's hot"
#   else
#     puts "fix the A/C whenever tou have a chance... it's cool..."
#   end
# end


print "Which sub do you live in? "
suburb = gets.chomp.downcase
# if suburb == "fairlight"
#   puts "nice views"
# elsif suburb == "bondi"
#   puts "just Don't"
# elsif suburb == "petersham"
#   puts "something"
# else
#   puts "I'm sure that's nice"
# end

puts case suburb
when 'fairlight'
  "nice views"
when 'bondi'
  "just Don't"
when 'petersham'
  "something"
else
  "Also nice"
end
