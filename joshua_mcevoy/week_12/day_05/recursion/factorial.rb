def factorial_i(n)
  result = 1
  while n > 1
    result = result * n #mutation
    n -= 1 #mutation
  end
  result
end


def factorial_r(n)
  if n > 1
    n * factorial_r( n - 1 ) #recursive call and the step closer to the base case
  else
    1 #base case
  end
end

require 'pry'
binding.pry
