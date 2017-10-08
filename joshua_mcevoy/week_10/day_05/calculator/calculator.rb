class Calculator
  def initialize
    @input = []
  end
  #An array style append
  def <<(n)
    @input.push n.to_f
  end

  def add
    # result = 0
    # @input.each do |n|
    #   result += n
    # end
    # result

    # @input.inject { |running_total, n| running_total + n }

    # @input.inject { |memo, n| memo + n }

    @input.inject(&:+)
  end

  def subtract
    @input.inject(&:-)
  end

  def multiply
    @input.inject(&:*)
  end

  def divide
    @input.inject(&:/)
  end
end
