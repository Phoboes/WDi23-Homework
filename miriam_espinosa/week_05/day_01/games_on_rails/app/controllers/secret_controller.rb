class SecretController < ApplicationController

def ask_for_guess
secret_number = rand 0..MAX_NUM # Range
  print "What is your guess? "
  gets.to_i # Implicit return
end

guess = ask_for_guess

until guess == secret_number
  if guess > secret_number
    puts "Wrong, guess lower!"
  else
    puts "Wrong, guess higher!"
  end
  guess = ask_for_guess
end

puts "Congratulations!"


  def form
  end
end
