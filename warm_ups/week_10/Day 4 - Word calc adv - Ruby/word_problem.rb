class WordProblem

  def initialize question
    get_matches question
  end

  def get_matches string
    # The match method matches a string against a regular expression.
      # It can either return a literal match:
      #  'What is 1 plus 5'.match(/What is/) => "What is"

      # Or it can return a selection of captures using brackets:
        # 'What is 1 plus 5'.match(/(\d) (plus)/) => [0]: "1 plus", [1]: "1", [2]: "plus"

      # This match has the following components:
      # -? (may be preceeded by a -) 
      # \d+ (one or many numbers) 
      # plus|minus (The string of plus or minus)
      # ? (optional)

      # In english: Find me one or many numbers, they may be preceeded by a -, the word of plus or minus, another single or many numbers, and then optionally another plus/minus and another number.
    @match = string.match(/(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/)

    # If there is no match, it's an invalid string. ArgumentError lets you raise your own custom error messages.
    if @match.nil?
      raise ArgumentError, "That's too complicated." 
    end
  end

  # Evaluate the string operator and run the appropriate action.
  def calculate num1, op, num2
    if op == "plus"
      num1 + num2
    else 
      num1 - num2
    end
  end

  def answer
    sum = calculate @match[1].to_i, @match[2], @match[3].to_i
    # If match[4] exists, there has been a chain on the question, run the sum on the extra matches.
    if @match[4]
      sum = calculate sum, @match[5], @match[6].to_i
    end
  end
end