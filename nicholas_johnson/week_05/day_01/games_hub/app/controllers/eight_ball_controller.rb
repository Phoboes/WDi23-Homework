class MagicEightBallController < ActionController::Base
	def eight_ball
		responses = ["outlook not so good", "YES", "Unlikely", "try asking again later!", "absolutely"]
		@appended_response = responses[rand(responses.length).to_i]
	end
end
