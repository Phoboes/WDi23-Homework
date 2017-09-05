# == Schema Information
#
# Table name: movies
#
#  id         :integer          not null, primary key
#  title      :text
#  year       :text
#  genre      :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Movie < ActiveRecord::Base
  belongs_to :director, :optional => true
end
