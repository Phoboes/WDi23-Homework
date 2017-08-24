Movie.destroy_all
Director.destroy_all

m1 = Movie.create(:name => "The Hidden Treasures", :image => "http://cdn.playbuzz.com/cdn/28ab26b4-3917-4925-8dad-b635f1626a26/b8aeb9dc-b591-4284-89ca-54ea1c3b2965.jpg")
m2 = Movie.create(:name => "The Help", :image => "http://cdn.playbuzz.com/cdn/28ab26b4-3917-4925-8dad-b635f1626a26/b8aeb9dc-b591-4284-89ca-54ea1c3b2965.jpg")


d1 = Director.create(:name => "Reeta S", :image => "http://www.homedepot.com/catalog/productImages/1000/ac/ace91f7f-0cae-46f8-9bf6-c671454ef56c_1000.jpg")
d2 = Director.create(:name => "Heath S", :image => "http://www.homedepot.com/catalog/productImages/1000/ac/ace91f7f-0cae-46f8-9bf6-c671454ef56c_1000.jpg")

#
# d1.movies << m2
# d2.movies << m1
