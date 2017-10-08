require 'pry'
class WordProblem

  def initialize string

    @match = string.match(/(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/)

    raise ArgumentError, "I don't like that." if @match.nil?
  end

  def calculate num1, op, num2
    if op == "plus"
      num1 + num2
    else
      num1 - num2
    end
  end

  def answer
    sum = calculate @match[1].to_i, @match[2], @match[3].to_i

    if @match[4]
      sum = calculate sum, @match[5], @match[6].to_i
    end

    sum
  end

end
