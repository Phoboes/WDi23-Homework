# == Schema Information
#
# Table name: directors
#
#  id       :integer          not null, primary key
#  name     :text
#  image    :text
#  movie_id :integer
#

class Director < ActiveRecord::Base
  has_many :movies
end
