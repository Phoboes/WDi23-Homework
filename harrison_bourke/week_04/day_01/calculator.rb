def get_user_choice
  # Show the available options.
  puts "(+) - Addition"
  puts "(-) - Subtraction"
  puts "(*) - Multiplication"
  puts "(/) - Division"
  puts "(q) - Quit"
  
  print "Enter your selection: "
  gets.downcase.chomp #Implicit return
end

menu_choice = get_user_choice

def addition(num1, num2)
  result = num1 + num2
  puts "#{num1} plus #{num2} is equal to #{result}"
end

def subtraction(num1, num2)
  result = num1 - num2
  puts "#{num1} minus #{num2} is equal to #{result}"
end

def multiplication(num1, num2)
  result = num1 * num2
  puts "#{num1} multiplied by #{"num2"} is equal to #{result}"
end

def division(num1, num2)
  result = num1 / num2
  puts "#{num1} divided by #{num2} is equal to #{result}"
end

until menu_choice == 'q'
  case menu_choice
  when '+'
    print "The first number you would like to add: "
    num1 = gets.to_f
    
    print "The second number you would like to add: "
    num2 = gets.to_f
    addition num1, num2
  when '-'
    print "The number you would like to subtract: "
    num1 = gets.to_f
    
    print "The amount you would like to subtract: "
    num2 = gets.to_f
    subtraction num1, num2
  when '*'
    print "The first number you would like to multiply: "
    num1 = gets.to_f
    
    print "The second number you would like to multiply: "
    num2 = gets.to_f
    
    multiplication num1, num2
  when '/'
    print "The numerator: "
    numerator = gets.to_f
    
    print "The denominator: "
    denominator = gets.to_f
    
    division numerator, denominator
  else
    "Invalid selection"
  end
  
  menu_choice = get_user_choice
end