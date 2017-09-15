require "pry"
g
class Actor

  def award_speech
    "I would like to thank me parents."
  end
end


class MarxBrother < Actor
  attr_accessor :name
  attr_accessor :instrument
  attr_accessor :vice
  def initialize(n=nil, i=nil, v=nil) #variadic
    @name = n
    @instrument = i
    @vice = v
  end

  def biography
    "My name is #{ @name }, I play the #{ @instrument }, and my vice is #{ @vice }"
  end

  def sing
    "Tr la la la la"
  end


end

groucho = MarxBrother.new 'Groucho', 'guitar', 'cigars'



class Stooge < Actor

end

# groucho = MarxBrother.new
# groucho.name = "Groucho"
# groucho.instrument = "guitar"
# groucho.vice = "cigars"
#
# harpo = MarxBrother.new
# harpo.name = "Harpo"
# harpo.instrument = "harp"
# harpo.vice = "harpo"



# groucho = {
#   :name => "Groucho",
#   :instrument => "guitar",
#   :vice => "cigars"
# }
#
# harpo = {
#   :name => "Harpo",
#   :instrument => "harp",
#   :vice => "mutism"
# }
#
# def biography(b)
#   "My name is #{b[:name]}, I play the #{b[:instrument]}, and I enjoy #{b[:vice]}"
# end
#
# puts biography(groucho)
# puts biography(harpo)
#
#
#
#
# shakespeare = {
#   :name => "Bill Shakespeare",
#   :occupation => "actor and playwright",
#   :residence => "London"
# }
#
# def shakespeare.biography
#   "My name is #{self[:name]}, i work as a #{self[:occupation]}, and I live in #{self[:residence]}."
# end


binding.pry
