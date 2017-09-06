Director.destroy_all
Director.create(:name => 'Stanley Kubrick', :nationality => 'American', :dob => '1928/07/26', :image => "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/KubrickForLook_%28cropped%29.jpg/220px-KubrickForLook_%28cropped%29.jpg")
Director.create(:name => 'Wong Kar Wai', :nationality => 'Chinese', :dob => '1958/07/17', :image => "http://assets.vogue.com/photos/5891525897a3db337a2499ce/master/pass/01-wong-kar-wai.jpg")
Movie.destroy_all
Movie.create(:name => "The Shining", :release => '1980/11/13', :genre => "Thriller", :image => "http://static.rogerebert.com/uploads/movie/movie_poster/the-shining-1980/large_zc5y5OwKSV9MDXpfWxwrOjyRHsq.jpg")
