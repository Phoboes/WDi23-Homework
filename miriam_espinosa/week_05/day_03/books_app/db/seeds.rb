Book.destroy_all

Book.create(:title => 'The Alchemist', :author => 'Paulo Coelho', :publisher => 'HarperCollins Publishers', :publication_date => '2014/05/01', :image => 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1483412266i/865._UY473_SS473_.jpg')

Author.destroy_all
Author.create(:name => 'Paulo Coelho', :dob => '1947/08/24', :image => 'https://pbs.twimg.com/profile_images/791423363797377024/svEXr6X8.jpg', :nationality => 'Brazilian')
