require "pry"

MTA = {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  'L' => ['8th', '6th', 'Union Square', '3rd', '1st'],
  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}
def plan_trip(starting_line, starting_station, destination_line, destination_station)

  index_strt_stn = MTA[starting_line].index starting_station
  index_strt_US = MTA[starting_line].index "Union Square"
  index_dest_stn = MTA[destination_line].index destination_station
  index_dest_US = MTA[destination_line].index "Union Square"

  if index_strt_stn < index_strt_US
    i = index_strt_stn
    first_array = []
    while i < index_strt_US do
       stations = MTA[starting_line][i]
       first_array.push(stations)
       i +=1
    end
    puts "You must travel through the following stops on the #{starting_line} line: #{first_array}."

  elsif index_strt_stn > index_strt_US
    puts "You must travel through the following stops on the #{starting_line} line: #{first_array.reverse}."
  end
  puts "Change at Union Square."
  #######################################################
  if index_dest_stn < index_dest_US
    j = index_dest_stn
    second_array = []
    while j < index_dest_US do
       stations = MTA[destination_line][j]
       second_array.push(stations)
       j +=1
    end
    puts "Your journey continues through the following stops on the #{destination_line} line: #{second_array.reverse}."
  elsif index_dest_stn > index_dest_US
    puts "Your journey continues through the following stops on the #{destination_line} line: #{second_array}."
  end
  num_stop_first = (index_dest_stn - index_dest_US).abs
  num_stop_second = (index_dest_stn - index_dest_US).abs
  puts "#{num_stop_first + num_stop_second} stops in total."
end
plan_trip '6', '33rd', 'N', 'Times Square'

# binding.pry



# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."
