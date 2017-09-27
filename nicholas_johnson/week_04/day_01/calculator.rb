def get_user_choice
	# Show the available operations
	puts "(+) - Addition"
	puts "(-) - Subtraction"
	puts "(x) - Multiplication"
	puts "(q) - Quit"

	print "Enter your selection: "
	gets.downcase.chomp # Implicit return
end

def addition
	puts "which numbers would you like to add? "
	@num1 = gets.to_i
	@num2 = gets.to_i
	@answer = @num1 + @num2
	puts "the answer is #{answer}"
end

def subtraction
	puts "which numbers would you like to subtract? "
	@num1 = gets.to_i
	@num2 = gets.to_i
	@answer = @num1 - @num2
	puts "the answer is #{answer}"
end

def multiplication
	puts "which numbers would you like to multiply? "
	@num1 = gets.to_i
	@num2 = gets.to_i
	@answer = @num1 * @num2
	puts "the answer is #{answer}"

menu_choice = get_user_choice

until menu_choice == 'q'
	case menu_choice
	when '+'
		addition
	when '-'
		subtraction
	else
		multiplication
	end
end
