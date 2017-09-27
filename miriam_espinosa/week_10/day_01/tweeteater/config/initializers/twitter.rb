$twitter = Twitter::REST::Client.new do |config|
  config.consumer_key = "3x7u6cZnXAr6yXCPRlqIDhitN"
  config.consumer_secret = "bnnj1Qk6rT2vQJexvd3UdlM2fCOnYCkWkfcXblJB0ivBI2qhpm"
end




# $twitter = Twitter::REST::Client.new do |config|
#   config.consumer_key = ENV['TWITTER_CONSUMER_KEY']
#   config.consumer_secret = ENV['TWITTER_SECRET_KEY']
#   config.access_token = ENV["TWITTER_ACCESS_TOKEN"]
#   config.access_token_secret = ENV["TWITTER_SECRET_TOKEN"]
# end
