require 'pry'

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
       # figure out the index of c
      #  binding.pry
       index = @alphabet.index(c)
       encoded_char = @reverse[index]
       message += encoded_char


    end
    @word = message
  end
end


puts "What do you want to secretly encode?"
input = gets.chomp

answer = Atbash.new(input)
puts "The secret code answer is  #{answer.encode}"


example = Atbash.new("test")
puts example.encode
puts example.encode
puts example.encode
