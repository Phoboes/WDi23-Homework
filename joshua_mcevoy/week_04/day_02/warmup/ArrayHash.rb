# A. Given the following data structure:
#
# a = ["Anil", "Erik", "Jonathan"]
# How would you return the string "Erik"?
# How would you add your name to the array?

a = ["Anil", "Erik", "Jonathan"]

a[1]
a.push 'Josh'

# B. Given the following data structure:
#
# h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
# How would you return the string "One"?
# How would you return the string "Two"?
# How would you return the number 2?
# How would you add {3 => "Three"} to the hash?
# How would you add {:four => 4} to the hash?

 h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}

 h[1]
 h[:two]
 h["two"]
 h[3] = "Three"
 h[:four] = 4


 # C. Given the following data structure:
 #
 # is = {true => "It's true!", false => "It's false"}
 # What is the return value of is[2 + 2 == 4]?
 # What is the return value of is["Erik" == "Jonathan"]?
 # What is the return value of is[9 > 10]?
 # What is the return value of is[0]?
 # What is the return value of is["Erik"]?

 true
 false
 false
 nil
 nil

#  D. Given the following data structure:
#
# users = {
#   "Jonathan" => {
#     :twitter => "tronathan",
#     :favorite_numbers => [12, 42, 75],
#   },
#   "Erik" => {
#     :twitter => "sferik",
#     :favorite_numbers => [8, 12, 24],
#   },
#   "Anil" => {
#     :twitter => "bridgpal",
#     :favorite_numbers => [12, 14, 85],
#   },
# }
# How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
# How would you add the number 7 to Erik's favorite numbers?
# How would you add yourself to the users hash?
# How would you return the array of Erik's favorite numbers?
# How would you return the smallest of Erik's favorite numbers?
# How would you return an array of Anil's favorite numbers that are also even?
# How would you return an array of the favorite numbers common to all users?
# How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?



users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}


users["Jonathan"][:twitter]
users["Erik"][:favorite_numbers].push(7)
users["Josh"] = {:twitter => "something", :favorite_numbers => [5 ,6 ,7]}
users["Erik"][:favorite_numbers]
users["Erik"][:favorite_numbers].min

users["Anil"][:favorite_numbers].select {|n| n.even?}
users["Anil"][:favorite_numbers].select(&:even?)

users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]
users.map {|name, info| info[:favorite_numbers]}.inject {|memo, nums| memo & nums}

(users["Jonathan"][:favorite_numbers] | users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]).sort
(users.map {|name, info| info[:favorite_numbers]}.inject {|memo, nums| memo | nums}).sort
users.map {|name, info| info[:favorite_numbers]}.flatten.sort.uniq
