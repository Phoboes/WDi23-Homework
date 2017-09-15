require 'pry'

class Robot
  def initialize
    @name = build_name
    @counter = 1
    @time = Time.now
    @last_command_time = Time.now
  end

  def reset
    @counter += 1
    @last_command_time = Time.now
    @name = build_name
  end

  def name
    @counter += 1
    @last_command_time = Time.now
    @name
  end

  def timers
    now = Time.now
    last_command = (now - @last_command_time).round
    first_command = (now - @time).round
    puts "#{last_command} seconds since last command. #{first_command} seconds since creation"
  end

  def instruction_count
    @counter
  end

  private

  def build_name
    name = []
    name.push ('A'..'Z').to_a.sample(2)
    name.push (0..9).to_a.sample(3)
    name.join
  end
end

binding.pry
