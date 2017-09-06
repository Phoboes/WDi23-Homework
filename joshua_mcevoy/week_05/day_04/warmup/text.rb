require "pry"

class Luhn

  def initialize(number)
    @number = number
  end

  def luhnify
    numbers = []
    @number.to_s.reverse.split('').map(&:to_i).each_with_index do |digit, index|


      # if index.even?
      #   value = digit
      # else
      #   value = digit * 2
      # end

      value = index.even? ? digit : digit * 2

      # if value > 10
      #   value = value - 9
      # end

      value -= 9 if value > 9

      numbers << value
    end
    numbers.reverse
  end

  def valid
    check_sum = luhnify.inject(0, :+)
    if check_sum % 10 == 0
      puts "#{@number} is a valid luhn number becuase the check sum is #{check_sum}"
    else
      puts "#{@number} is not valid because the check cum is #{check_sum}"
    end
  end

end
