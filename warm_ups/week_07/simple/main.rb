require 'pry'

class SimpleSums

  def initialize num
    @num = num
  end

  # def first_sum
  #   output = 0
  #   1.upto(@num) do | i |
  #     if i % 2 == 0
  #       output -= 1
  #     else
  #       output += 1
  #     end
  #   end
  #   output
  # end
  def first_sum
    @num.even? ? 0 : 1
  end


# s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc

  # def second_sum
  #   output = 0
  #   1.upto( @num ) do | i |
  #     output = output + i
  #   end
  #   output
  # end

  def second_sum
    ( @num * (@num + 1) ) / 2
  end
# s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

end
sum = SimpleSums.new( 4 )

p sum.first_sum

binding.pry
# p sum.second_sum
