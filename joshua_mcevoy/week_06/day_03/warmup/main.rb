# Write a program that can calculate the sum of the first n elements of the following sequences:
#
# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc
# For example:
#
# s1(4) = 0
# s2(4) = 10
# Use RUBY!
#
# Can you guess what the sum would be if n is infinity?



# def s1 n
#   result = 0
#   puts n #4
#
#   while n > 0 do
#     result += n
#     n -= 1
#   end
#   puts result
# end
#
# s1(4)
#
# def s2 n
#   result = 1
#   while n > 0 do
#     if result == 1
#       result - 1
#     else
#       result + 1
#     end
#     n -= 1
#   end
#   puts result
# end
#
# s2(4)

require 'pry'

class SimpleSums
  def initialize num
    @num = num
  end #init

  def first_sum
    @num.even? ? 0 : 1
  end #first_sum

  # def second_sum
  #   output = 0
  #   1.upto(@num) do |i|
  #     output = output + i
  #   end #loop
  #   output
  # end #second_sum

  def second_sum
    (@num * (@num + 1)) / 2
  end #second_sum

end #SimpleSums

sum = SimpleSums.new(4)

p sum.first_sum
p sum.second_sum
