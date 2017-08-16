require "pry"

n_line = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
l_line = ["8th", "6th", "Union Square", "3rd", "1st"]
six_line = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]


def plan_trip (starting_line, starting_stop, ending_line, ending_stop)
  # First check to see if it any point we need to change stations.
  if starting_line == ending_line
    # First run the single line platform function going forwards and save the answer in an array
    forward_trip = single_line(starting_line, starting_stop, ending_stop)

    # Now do the same except pass in the reverse of the starting_line
    backward_trip = single_line(starting_line.reverse, starting_stop, ending_stop)

    # Now check whech array is smaller and return that one
    if forward_trip.length < backward_trip.length
      output(forward_trip)
    else
      output(backward_trip)
    end
  else
    # First we'll figure out the first part of the trip, to Union Square. We'll do the same as we did with the sinle line part and do both ways.
    forward_trip = single_line(starting_line, starting_stop, "Union Square")
    backward_trip = single_line(starting_line.reverse, starting_stop, "Union Square")

    # Now we'll create an array for the whole trip and set it equal to which ever one was shorter.
    trip = []
    if forward_trip.length < backward_trip.length
      trip = forward_trip
    else
      trip = backward_trip
    end

    # And now we'll do the same for the next line.
    forward_trip = single_line(ending_line, "Union Square", ending_stop)
    backward_trip = single_line(ending_line.reverse, "Union Square", ending_stop)

    # Now we'll add the new line to the trip array.
    if forward_trip.length < backward_trip.length
      trip += forward_trip
    else
      trip += backward_trip
    end

    output(trip)
  end
end



def single_line (line, starting_stop, ending_stop)
  # Get the indices of the starting and ending stop.
  start_index = line.index(starting_stop)
  end_index = line.index(ending_stop)

  # Create an array which will eventually hold the stops we make.
  trip = []

  # This current_index will be the index with which we increment
  current_index = start_index

  while true do
    # Add this stop to the trip array
    trip.push line[current_index]

    # Increment the index
    current_index += 1

    # Set the current_index to 0 if we're at the end of the array
    current_index = 0 if current_index == line.length

    # Now check to see if we're at the last stop.
    if current_index == end_index
      # If so, add the last stop to the array, and break out of the loop.
      trip.push line[current_index]
      return trip
    end
  end
end


def output (trip)

  # Start a string to output which we will add the stops to.
  string_to_output = "You must travel through the following stops: "

  # Loop through the trip array
  trip.each_with_index do |x, i|

    # First let's check to see if the current stop is Union Square, AND the last stop was also Union Square. If this is the case we need to output to the user that they need to change at this stop.
    if x == "Union Square"
      if trip[i - 1] == "Union Square"
        puts string_to_output
        puts "Change at Union Square."
        string_to_output = "Your journey continues through the following stops: "
      else
        if trip[i + 1] == "Union Square"
          string_to_output += "#{x}."
        elsif i == trip.length - 1
          string_to_output += "#{x}."
        else
          string_to_output += "#{x}, "
        end
      end
    else
      if i == trip.length - 1
        string_to_output += "#{x}."
      else
        string_to_output += "#{x}, "
      end
    end
  end

  puts string_to_output
  puts "#{trip.length - 1} stops in total."
end


plan_trip(n_line, "Times Square", six_line, "33rd")
