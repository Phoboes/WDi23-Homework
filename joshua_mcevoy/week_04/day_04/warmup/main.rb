require "pry"

# Nucleotide Count
#
# DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.
#
# Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.
#
# Shortest intro to biochemistry EVAR:
#
# twigs are to birds nests as
# nucleotides are to DNA and RNA as
# amino acids are to proteins as
# sugar is to starch as
# oh crap lipids
# I'm not going to talk about lipids because they're crazy complex.
#
# So back to nucleotides.
#
# There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.
#
# There are no other nucleotides.
#
# Find how many of each nucleotides are in a string that you pass in to a function
#
# Make sure that you validate it has nucleotides!


# nucleotides {
#   DNA: %w{A C G T},
#   RNA: %w{A C G U}
# }
#
# dna = 0
# rna = 0
#
# def nucleo str
#   array = str.upcase.split('')
#   p array
#   array.each do |i|
#     if i ==
#     end
#
# end
#
# nucleo("ACGT")
# nucleo("ACGU")
# nucleo("FHEV")



def nucleotides
{
  A: 0,
  C: 0,
  G: 0,
  T: 0
}
end

def nucleotides_count word
  word  = word.upcase.split('')
  n = nucleotides
  word.each do | letter |
    n.each do |key, value|
      if key.to_s == letter
        n[key] += 1
      end
    end
  end
  p n
end

p nucleotides_count "SVUHGACSNGCKJACSTUVVDVIU"
