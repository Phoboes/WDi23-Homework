# Line Reader
# Usage: ruby lr.rb somefile.txt

# ARGF.each do |line|
#   puts line if line =~ /[Ff]red/
# end

# ARGF.each do |line|
#   puts line if line =~ /[.]/
# end

# ARGF.each do |line|
#   puts line if line =~ /[A-Z][a-z]/
# end

# ARGF.each do |line|
#   puts line if line =~ /(.)\1/ #(): capturing, \1 reference
# end

# ARGF.each do |line|
#   puts line if line =~ /([^ ])\1/ #[^ ]: negated character class, (): capturing, \1 reference
# end

ARGF.each do |line|
  puts line if line =~ /fred/ && line =~ /wilma/ #/(fred.*wilma|wilma.*fred)/
end
