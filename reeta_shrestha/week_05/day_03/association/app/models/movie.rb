# == Schema Information
#
# Table name: movies
#
#  id    :integer          not null, primary key
#  name  :text
#  image :text
#

class Movie < ActiveRecord::Base
  belongs_to :director, :optional => true
end
