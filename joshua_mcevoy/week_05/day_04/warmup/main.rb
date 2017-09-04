# The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.
#
# An Atbash cipher for the Latin alphabet would be as follows:
#
# Plain:  abcdefghijklmnopqrstuvwxyz
# Cipher: zyxwvutsrqponmlkjihgfedcba
# It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.
#
# Examples
#
# Encoding "test" gives "gvhg"
# Decoding "gvhg" gives "test"

require 'pry'

# class Atbash
#
#   def initialize(str)
#     @str = str
#   end
#
#   def cipher
#     plain_array =  ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
#     cipher_array = ['z','y','x','w','v','u','t','s','r','q','p','o','n','m','l','k','j','i','h','g','f','e','d','c','b','a']
#     array = []
#     @str = str.split('')
#     str = str.each{
#       |l| index = plain_array.index(l)
#       array.push(cipher_array[index])
#       p array
#     }
#   end
#   binding.pry
# end


class Atbash
  def initialize(word)
    @word = word.downcase
    @alphabet = ("a".."z").to_a
    @alphabet << ' ' << '!' << ',' << '-'
    @reverse = @alphabet.reverse
  end

  def encode
    message = ''
    @word.each_char do |c|
      index = @alphabet.index(c)
      encoded_char = @reverse[index]
      message += encoded_char
    end
    @word = message
  end
end



puts "what do you want to secretly encode?"
input = gets.chomp

answer = Atbash.new(input)
puts "The sercet answer is #{answer.encode}"



# example = Atbash.new("test")
# binding.pry
# puts Atbash.encode
# puts Atbash.encode
# puts Atbash.encode
