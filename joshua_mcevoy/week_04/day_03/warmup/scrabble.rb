require "pry"

# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
#
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
#                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10

# def word_multi (str, word_multi, letter_multi, score)
#   puts score
#   if (word_multi == "three")
#
#     score * 3
#     binding.pry
#   elsif (word_multi == "two")
#     score * 2
#   end
#   puts "For the word #{str} you get #{score} points."
# end
#
#
# def scrabble(str, word_multi, letter_multi)
#   score = 0
#   array = str.upcase.split('')
#   p array
#
#   array.each do |i|
#     if (i == 'A' || i == 'E' || i == 'I' || i == 'O' || i == 'U' || i == 'L' || i == 'N' || i == 'R' || i == 'S' || i == 'T' )
#       score += 1
#     elsif (i == 'D' || i == 'G' )
#       score += 2
#     elsif (i == 'B' || i == 'C' || i == 'M' || i == 'P')
#       score += 3
#     elsif (i == 'F' || i == 'H' || i == 'V' || i == 'W' || i == 'Y'  )
#       score += 4
#     elsif ( i == 'K')
#       score += 5
#     elsif ( i == 'J' || i == 'X')
#       score += 8
#     elsif (i == 'Q' || i == 'Z')
#       score += 10
#     end
#
#   end
#
#   if (word_multi)
#     word_multi(str, word_multi, letter_multi, score)
#   else
#     puts "For the word #{str} you get #{score} points."
#   end
# end
#
# # scrabble (word, word_multi, letter_multi)
# scrabble("cabbage", "three", "two")




values = {
  1 => %w{A E I O U L N R S T},
  2 => %w{D G},
  3 => %w{B C M P},
  4 => %w{F H V W Y},
  5 => %w{K},
  8 => %w{J X},
  10 => %w{Q Z},
}

puts "what word would you like to check? "

word = gets.chomp

score = 0

word.downcase.split('').each do |letter|
  values.each do |key, value|
    score += key if value.include?(letter)
  end
end


puts "The total score for the word #{word} is #{score} points."
