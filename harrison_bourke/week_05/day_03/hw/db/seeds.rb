Author.destroy_all

Author.create(:name => "JK Rowling", :dob => "1965/07/31", :nationality => "English", :image => "http://jkrowling.com/wp-content/uploads/2016/12/JKROWLINGPR_S01_00057_V4.jpg")

Book.destroy_all

Book.create(:title => "Harry Potter & the Philosopher's Stone", :year => "1997", :genre => "Fantasy", :image => "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg")
