require 'pry'
require 'colorize'
require 'io/console'

# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

class Line
    attr_reader :stations, :change_point_index

    def initialize stations, change_point
        @stations = stations
        @change_point_index = @stations.index(change_point)
    end
end

class Travel
    # manip methods for travel

    # init counter for trip
    trip_counter = 0

end

line_N = Line.new ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'], 'Union Square'
line_L = Line.new ['8th', '6th', 'Union Square', '3rd', '1st'], 'Union Square'
line_6 = Line.new ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'], 'Union Square'


# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."

def plan_trip start_line, start_station, end_line, end_station

    # same line
    start_index = start_line.stations.index(start_station)
    end_index = end_line.stations.index(end_station)

    if start_line == end_line
        if start_index < end_index
            p start_line.stations[start_index..end_index]
        else
            p start_line.stations[end_index..start_index].reverse
        end
    end
    # line_N.stations[line_N.stations.index('Times Square')..line_N.stations.index('Union Square')]
end

plan_trip line_N, 'Times Square', line_N, 'Union Square'

binding.pry

# stop counter
# traversal from point to point into array
# check where lines intersect
