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


def get_user_choice
  #show the available operations
  puts "(+) - Addition"
  puts "(-) - Substraction"
  puts "(/) - Division"
  puts "(*) - Multiple"
  puts "(**) - Exponents"
  puts "(sr) - Square Root"
  puts "(q) - Quit"

  print "Enter your selection: "
  gets.downcase.chomp
end


def addition(num1, num2)
  answer = num1 + num2
  puts "The answer is: #{answer}"
end

def subtraction(num1, num2)
  answer = num1 - num2
  puts "The answer is: #{answer}"
end

def division(num1, num2)
  answer = num1 / num2
  puts "The answer is: #{answer}"
end

def multiple(num1, num2)
  answer = num1 * num2
  puts "The answer is: #{answer}"
end

def exponents(num1, num2)
  answer = num1 ** num2
  puts "The answer is: #{answer}"
end

def sqrt(num)
  puts "The answer is: #{Math.sqrt(num)}"
end

menu_choice = get_user_choice

puts "Thank you for selecting: #{menu_choice}"

until menu_choice == 'q'
  case menu_choice
  when '+'
    print "what is your first number? "
    first_number = gets.to_i
    print "what is your second number? "
    second_number = gets.to_i
    addition(first_number, second_number)
  when '-'
    print "what is your first number? "
    first_number = gets.to_i
    print "what is your second number? "
    second_number = gets.to_i
    subtraction(first_number, second_number)
  when '/'
    print "what is your first number? "
    first_number = gets.to_i
    print "what is your second number? "
    second_number = gets.to_i
    division(first_number, second_number)
  when '*'
    print "what is your first number? "
    first_number = gets.to_i
    print "what is your second number? "
    second_number = gets.to_i
    multiple(first_number, second_number)
  when '**'
    print "what is your first number? "
    first_number = gets.to_i
    print "what is your second number? "
    second_number = gets.to_i
    exponents(first_number, second_number)
  when 'sr'
    print "What number do you want to get the square root of? "
    first_number = gets.to_i
    sqrt(first_number)
  else
    puts "Invalid selection"
  end


  puts "Thank you for selecting: #{menu_choice}"
  menu_choice = get_user_choice
end
