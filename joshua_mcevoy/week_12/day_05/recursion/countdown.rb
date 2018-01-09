def countdown_i(n=10)
  while n >= 0
    puts n
    n -= 1 #Mutation
    sleep 1
  end

  puts "Blast off!"
end

def countdown_r(n=10)
  if n < 0 #base case
    puts "Blast off!"
  else
    puts n
    sleep 1
    countdown_r n - 1 #Recursive case, one step closer to the base case 
  end
end

require 'pry'
binding.pry
