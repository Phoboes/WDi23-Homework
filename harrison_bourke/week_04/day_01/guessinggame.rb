puts "Between what numbers would you like to play with"
max_number = gets.to_i + 1


number_to_guess = rand(max_number)

while true
  puts "Guess a number between 0 and #{max_number}"
  user_guess = gets.to_i
  if user_guess == number_to_guess
    puts "Correct!"
    return
  end
  
  if user_guess < number_to_guess
    puts "Wrong, guess higher!"
  else
    puts "Wrong, guess lower!"
  end  
end

  