require 'pry'

class Roman
  def initialize
    @roman_map = {
      # 5000 => '5 thouso',
      # # 4000 => 'EDGE',
      1000 => 'M',
      900 => 'CM',
      500 => 'D',
      400 => 'CD',
      100 => 'C',
      90 => 'XC',
      50 => 'L',
      40 => 'XL',
      10 => 'X',
      9 => 'IX',
      5 => 'V',
      4 => 'IV',
      1 => 'I'
    }
  end

  def to_roman( number )

    result = ''

      @roman_map.each do |key, value|
      puts "EACH: #{key} => #{value}. Number #{number}. Result #{result}"
      while number >= key
        result += value
        number -= key
        puts "WHILE: #{key} => #{value}. so we add #{value} to our result making it #{result} Now the numebr is  #{number}"
      end #while
      break if number == 0
    end #each
    puts "Result = #{result}"
  end

end



tester = Roman.new
tester.to_roman 1000
tester.to_roman 2455
tester.to_roman 2457

# tester.to_roman(1990) MDCCCCLXXXX MCMXC
