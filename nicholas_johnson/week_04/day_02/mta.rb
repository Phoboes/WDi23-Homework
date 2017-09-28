require "pry"

network = {
	"N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
	"L" => ["8th", "6th", "Union Square", "Astor Place"],
	"Six" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


print "Welcome! Which line will you be starting on today? (N, L, Six) "
start_line = gets.chomp



if start_line == "N"
	print "Which station are you starting at? (Times Square, 34th, 28th, 23rd, Union Square, 8th) "
	start_station = gets.chomp
elsif start_line == "L"
	print "Which station are you starting at? (8th, 6th, Union Square, Astor Place) "
	start_station = gets.chomp
elsif start_line == "Six"
	print "Which station are you starting at? (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place) "
	start_station = gets.chomp
else
	print "Not an applicable line. Please try again!"
end



network[start_line].each do |i|
  if start_station == i
    $splice_one = network[start_line].index(i)
  end
end



print "Which line is the station you need to get to on? (N, L, Six) "
end_line = gets.chomp

if end_line == "N"
	print "Which station are you ending at? (Times Square, 34th, 28th, 23rd, Union Square, 8th) "
end_point = gets.chomp
elsif end_line == "L"
	print "Which station are you ending at? (8th, 6th, Union Square, Astor Place) "
end_point = gets.chomp
elsif end_line == "Six"
	print "Which station are you ending at? (Grand Central, 33rd, 28th, 23rd, Union Square, Astor Place) "
end_point = gets.chomp
else
	print "Not an applicable station. Please try again!"
end



network[end_line].each do |i|
  if end_point == i
    $splice_two = network[start_line].index(i)
  end
end

# network[start_line][$splice_one..$splice_two].each do |i|


if start_line == end_line
	puts "You must travel through the following stops on the #{network.keys[start_line.to_i]} route: #{network[start_line][$splice_one..$splice_two]}. #{network[start_line][$splice_one.to_i..$splice_two.to_i].length.to_i - 1} in total."
end










if start_line != end_line
 if start_line == "N"
	 if network["N"]["Union Square"].index.to_i < $splice_one.to_i
		 $part_one = network[start_line][4..$splice_one].reverse
	 else
		 if end_line == "L"
			 if network["L"]["Union Square"].index.to_i > $splice_two.to_i
				 $part_two = network[end_line][$splice_two..2].reverse
			 else
				 $part_two = network[end_line][$splice_two..2]
			 end
		 end
		 if end_line == "Six"
			 if network["Six"]["Union Square"].index > $splice_two.to_i
				 $part_two = network[end_line][$splice_two..4].reverse
			 else
				 $part_two = network[end_line][$splice_two..4]
			 end
		 end
	 end
 end
 if start_line == "L"
	 $part_one = network[start_line][$splice_one..2]
	 if end_line == "N"
		 if network["N"]["Union Square"].index > $splice_two
			 $part_two = network[end_line][$splice_two..4].reverse
		 else
			 $part_two = network[end_line][$splice_two..4]
		 end
	 end
	 if end_line == "Six"
		 if network["Six"]["Union Square"].index > $splice_two
			 $part_two = network[end_line][$splice_two..4].reverse
		 else
			 $part_two = network[end_line][$splice_two..4]
		 end
	 end
 end
 if start_line == "Six"
	 $part_one = network[start_line][$splice_one..4]
	 if end_line == "N"
		 if network["N"]["Union Square"].index > $splice_two
			 $part_two = network[end_line][$splice_two..4].reverse
		 else
			 $part_two = network[end_line][$splice_two..4]
		 end
	 end
	 if end_line == "L"
		 if network["L"]["Union Square"].index > $splice_two
			 $part_two = network[end_line][$splice_two..2].reverse
		 else
			 $part_two = network[end_line][$splice_two..2]
		 end
	 end
 end
end



# choices = params.select { |key, value| key.to_s.match(/^choice\d+/) }
