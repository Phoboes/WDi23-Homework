#Simple Sums

#Write a program that can calculate the sum of the first n elements of the following sequences:

#s1 = 1 - 1 + 1 - 1 + 1 - 1 + //etc
#s2 = 1 + 2 + 3 + 4 + 5 + 6 + //etc

#For example:

#s1(4) = 0
#s2(4) = 10

#Use RUBY!

#Can you guess what the sum would be if n is infinity?

def s1(num)
  puts num % 2 == 0 ? 0 : 1 
end

def s2(num)
  puts (0..num).to_a.map(&:to_i).inject(:+)
end

# mathy version
def s2_mathy(num)
  puts (num * (num + 1)) / 2
end

s1(4)
s2(4)
s2(0)

s2_mathy(4)
s2_mathy(100)
