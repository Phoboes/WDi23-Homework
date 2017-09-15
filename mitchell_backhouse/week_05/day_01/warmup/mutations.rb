require 'pry'

def check_mutations(str1, str2)
    s1 = str1.split('')
    s2 = str2.split('')

    count = 0
    s1.each_with_index do |k, i|
        count += 1 if s2[i] != k
    end

    count
end

puts check_mutations("GAGCCTACTAACGGGAT", "CATCGTAATGACGGCCT")

