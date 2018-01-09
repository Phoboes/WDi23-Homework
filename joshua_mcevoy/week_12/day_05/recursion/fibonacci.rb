def fibonacci_i(n)
  a = 1
  b = 1
  while n > 1
    a, b = b, a + b # parrallel assignment: a = b, b = a + b
    n -= 1
  end

  a
end

#slow recursive
def fibonacci_r(n)
    if n <= 2
      1 #base case
    else
      fibonacci_r(n - 1) + fibonacci_r(n - 2)
    end
end

require 'pry'
binding.pry
