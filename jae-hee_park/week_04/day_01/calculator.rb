# #Calculator
#
# ###Explanation
#
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# ###Specification:
#
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# ####Phase 1
#
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# ####Phase 2
#
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus
#
# Mortgage Calculator
#
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
#
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
#
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour


def get_user_choice
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  # puts "(**) - Exponent"
  puts "(q) - Quit"

  print "Enter your selection: "
  gets.downcase.chomp #implicit return
end

# def get_int_values
#   puts "numbers"
#   value = [gets, gets].map{ |s| s.chomp.to_i }
#   puts value
# end

def addition
  sum = 0
  puts "Which numbers would you like to add?"
  n1 = gets.to_f
  n2 = gets.to_f
  sum += n1
  sum += n2
  puts "The sum is... #{sum}"
end


def subtraction
  sum = 0
  puts "Which numbers would you like to subtract?"
  n1 = gets.to_f
  n2 = gets.to_f
  sum = n1 - n2
  puts "The result is... #{sum}"
end
#
def multiplication
  sum = 1
  puts "Which numbers would you like to multiply?"
  n1 = gets.to_f
  n2 = gets.to_f
  sum = n1 * n2
  puts "The result is... #{sum}"
end
# #
def division
  sum = 0
  puts "Which numbers would you like to divide?"
  n1 = gets.to_f
  n2 = gets.to_f
  sum = n1 / n2
  puts "The result is... #{sum}"
end
# #
# def exponent
#   sum = 1
#   puts "Which numbers would you like to divide?"
#   n1 = gets.to_i
#   sum = n1**
#   puts "The result is... #{sum}"
# end

menu_choice = get_user_choice

puts "Thank you for selecting: #{menu_choice}"

until menu_choice == 'q'
  case menu_choice
  when '+'
    addition
  when '-'
    subtraction
  when '*'
    multiplication
  when '/'
    division
  # when '**'
  #   exponent
  else
    puts 'invalid selection'
  end
  menu_choice = get_user_choice
end
