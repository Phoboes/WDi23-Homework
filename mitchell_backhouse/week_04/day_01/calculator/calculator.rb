require 'pry'
require 'io/console'

def continue_story
  print "press any key"
  STDIN.getch
  system "clear"
end

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
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f

  puts "\nAddition: #{num1} + #{num2}"
  puts "----------------------------"
  puts num1 + num2
  puts "----------------------------\n\n"

  continue_story
end

def subtraction
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f


  puts "\nSubtraction: #{num1} - #{num2}"
  puts "----------------------------"
  puts num1 - num2
  puts "----------------------------\n\n"

  continue_story
end

def division
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f

  puts "\nDivision: #{num1} / #{num2}"
  puts "----------------------------"
  puts num1 / num2
  puts "----------------------------\n\n"

  continue_story
end

def multiplication
  print "\nEnter your first number: "
  num1 = gets.to_f
  print "Enter your second number: "
  num2 = gets.to_f

  puts "\nMultiply: #{num1} * #{num2}"
  puts "----------------------------"
  puts num1 * num2
  puts "----------------------------\n\n"

  continue_story
end

def exponent
  print "\nEnter your base number: "
  num1 = gets.to_f
  print "Enter your exponent: "
  num2 = gets.to_f

  puts "\nExponent: #{num1} to the power of #{num2}"
  puts "----------------------------"
  puts num1 ** num2
  puts "----------------------------\n\n"

  continue_story
end

def square_root
  print "\nEnter your number: "
  num1 = gets.to_f

  puts "\nSquare Root: #{num1}"
  puts "----------------------------"
  puts Math.sqrt(num1)
  puts "----------------------------\n\n"

  continue_story
end

system "clear"
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

  system "clear"
  menu_choice = get_user_input
end
