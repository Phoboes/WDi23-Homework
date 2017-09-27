# == Schema Information
#
# Table name: authors
#
#  id          :integer          not null, primary key
#  name        :text
#  dob         :date
#  nationality :text
#  image       :text
#

class Author < ActiveRecord::Base
  has_many :books
end
