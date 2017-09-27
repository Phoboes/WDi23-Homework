# Calculate the monthly required payment given the other variables as input (look up the necessary variables)


puts "Type (Q) to quit"
print "How much do you want to borrow? "
borrowed = gets.to_i
print "Length of mortgage? (years): "
months = gets.to_i * 12
interest = 0.15
repayment = ((interest * borrowed) + borrowed) / months
repayments = repayment.to_i
puts "your repayments will be $#{repayments} per month"
