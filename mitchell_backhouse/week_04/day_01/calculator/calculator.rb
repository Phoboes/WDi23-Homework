require 'pry'

def get_user_input
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(/) - Division"
  puts "(*) - Multiplication"
  puts "(^) - Exponent"
  puts "(s) - Square Root"
  puts "(q) - Quit"

  print "Enter your selection: "

  # debug inside pry
  # binding.pry

  gets.downcase.chomp
end

def addition
  print "Enter your first number: "
  num1 = gets.to_i
  print "Enter your second number: "
  num2 = gets.to_i

  puts num1 + num2
end

def subtraction
  print "Enter your first number: "
  num1 = gets.to_i
  print "Enter your second number: "
  num2 = gets.to_i

  puts num1 - num2
end

def division
  print "Enter your first number: "
  num1 = gets.to_i
  print "Enter your second number: "
  num2 = gets.to_i

  puts num1 / num2

end

def multiplication
  print "Enter your first number: "
  num1 = gets.to_i
  print "Enter your second number: "
  num2 = gets.to_i

  puts num1 * num2

end

def exponent
  print "Enter your base number: "
  num1 = gets.to_i
  print "Enter your exponent: "
  num2 = gets.to_i

  puts num1 ** num2
end

def square_root
  print "Enter your number: "
  num1 = gets.to_i

  puts Math.sqrt(num1)

end

menu_choice = get_user_input

until menu_choice == "q"
  case menu_choice
  when "+"
    addition
  when "-"
    subtraction
  when "/"
    division
  when "*"
    multiplication
  when "^"
    exponent
  when "s"
    square_root
  else
    puts "Invalid Selection"
  end

  menu_choice = get_user_input
end
