# class Collatz
#   def initialize num
#     @arr = [ num ]
#     set_collection num
#   end
#
#   def set_collection num
#     if @arr.last > 1
#       if num.even?
#         @arr.push( num / 2 )
#       else
#         @arr.push( ( num * 3 ) + 1 )
#       end
#       set_collection @arr.last
#     end
#   end
#
#   def answer
#     puts "The steps were: #{ @arr.join(', ') }."
#     puts "The total number of steps was: #{ @arr.length }"
#   end
# end
#
# Collatz.new(10).answer

####################################################

# class Collatz
#   def initialize num
#     @arr = [ num ]
#     set_collection num
#   end
#
#   def set_collection
#     while @arr.last > 1
#       @arr.push( @arr.last.even? ? ( @arr.last / 2 ) : ( (@arr.last * 3) + 1 ) )
#     end
#   end
#
#   def answer
#     puts "The steps were: #{ @arr.join(', ') }."
#     puts "The total number of steps was: #{ @arr.length }"
#   end
# end

####################################################

arr = [10]

arr.push( @arr.last.even? ? ( @arr.last / 2 ) : ( (@arr.last * 3) + 1 ) ) until arr.last == 1

puts arr.join(', ')
