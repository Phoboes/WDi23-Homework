def single_trip(line, origin, destination)
  train = {
    :N => ['Times Square', '34th', '28thN', '23rd', 'Union Square', '8thN'],
    :L => ['8thL', '6th', 'Union Square', '3rd', '1st'],
    6 => ['Grand Central', '33rd', '28th6', '23rd6', 'Union Square', 'Astor Place'],
    :transit => ['Union Square']
  }

  originIdx = train[line].index(origin)
  destinationIdx = train[line].index(destination)

  stations = train[line][originIdx..destinationIdx]
  number_of_stations = stations.length

  if destinationIdx < originIdx

    stations = train[line][destinationIdx..originIdx].reverse
    number_of_stations = stations.length

  end

  puts "Travel in #{line} line. \n
  Begin your journey at #{origin} station. \n
  You have to travel the following stops: #{stations.join(', ')}. \n
  #{number_of_stations} in total. \n"
end

# single_trip :N, 'Times Square', 'Union Square'

def build_trip(start_line, origin, end_line, destination)
  if start_line == end_line
    single_trip(start_line, origin, destination)

  else
    `#{single_trip(start_line, origin, 'Union Square')}
    #{single_trip(end_line, 'Union Square', destination)}`
  end
end

# build_trip(:L, '1st', :L, '8thL')
build_trip(:N, 'Times Square', 6, 'Astor Place')
