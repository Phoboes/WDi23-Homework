# #Title: Guess The Number
#
# ###Activity:
#
# You are to generate a basic "guess my number" game. The computer will pick a random number between 0 and 10. The user will guess the number until they guess correctly.
# ###Specification:
#
# The user should be asked to guess a number
# If the user's guess is correct, the user should see a congratulatory message
# If the user's guess is not correct, the user should be asked to guess the number again.
# ###Extensions:
#
# Let the user choose the maximum value (so they can play a long game with a random value between 0 and 10000, for example).
# Give feedback to the user: "Wrong, guess higher!" or "Wrong, guess lower!"



print "What is the max number? "
MAX_NUM = gets.to_i

secret_number = rand 0..MAX_NUM  #Range

def ask_for_guess
  print "Guess a number: "
  guess = gets.to_i #Implicit return
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

puts "Congrats!"
#
# puts "guess a number between 1 and 10"
# guess = gets.to_i
#
# def numberGuess(guess)
#   if guess == random_number
#     puts "you got it"
#   else
#     if guess < random_number
#       puts "higher"
#     else
#       puts "lower"
#     end
#   end
# end
