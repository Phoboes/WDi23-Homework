# == Schema Information
#
# Table name: directors
#
#  id          :integer          not null, primary key
#  name        :text
#  nationality :text
#  dob         :date
#  award       :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#


class Director < ActiveRecord::Base
  has_many :movies
end

# director has muti movies
# has_many --> the link with movie.rb with director.rb
### MAKE SURE run $ annotate
