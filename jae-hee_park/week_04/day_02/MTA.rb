#
# MTA Lab

##Objectives:
#
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
#
# Create a program that models a simple subway system.

# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# `puts` shows output similar to this:
# "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# "Change at Union Square."
# "Your journey continues through the following stops: 23rd, 28th, 33rd."
# "7 stops in total."
# There are 3 subway lines:

#
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
#
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
require 'pry'
require 'colorize'

MTA = { "N" => ["Times Square", "N34th", "N28th", "N23rd", "Union Square", "N8th"],
  "L"=> ["L8th", "L6th", "Union Square", "L3rd","L1st"],
  "6" => ["Grand Central", "6-33rd", "6-28th", "6-23rd", "Union Square", "Astor Place"]
}

def user_choice_line
puts "what line would you like to get on?: L, N or 6: "
gets.chomp
end

on_line = user_choice_line

def user_choice_onstop
puts "what station would you like to get on?: "
gets.chomp
end
on_stop = user_choice_onstop

def user_choice_offline
puts "what line would you like to get off at?: L, N or 6: "
gets.chomp
end

off_line = user_choice_offline

def user_choice_offstop
puts "what station would you like to get off at?: "
gets.chomp
end

off_stop = user_choice_offstop

index_onstop = MTA[on_line].index(on_stop)

onStop_US = MTA[on_line].index("Union Square")

if onStop_US > index_onstop
stops_onLine = MTA[on_line][index_onstop+1..onStop_US]
elsif index_onstop > onStop_US
  stops_onLine = MTA[on_line][onStop_US..index_onstop-1].reverse
end

offStop_US = MTA[off_line].index("Union Square")

index_offStop = MTA[off_line].index(off_stop)

if on_line == off_line
   if index_offStop > index_onstop
     on_stops_if_same_line = MTA[on_line][index_onstop+1..index_offStop]
  else
    MTAonlinereverse = MTA[on_line].reverse
    on_stops_if_same_line = MTAonlinereverse[index_offStop+1..index_onstop]
  end
end

if index_offStop > offStop_US
off_stops = MTA[off_line][offStop_US+1..index_offStop]
elsif offStop_US > index_offStop
  off_stops = MTA[off_line][index_offStop..offStop_US-1].reverse
end

total_stops = stops_onLine.length + off_stops.length

if on_line == off_line
  puts "You must travel through the following stops on the #{on_line} line : #{on_stops_if_same_line}. #{on_stops_if_same_line.length} stops in total"
else
puts "You must travel through the following stops on the #{on_line} line: #{stops_onLine}. Change at Union Square
Your journey continues through the following stops: #{off_stops}.
#{total_stops} stops in total."
end

binding.pry
