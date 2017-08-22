# == Schema Information
#
# Table name: mountains
#
#  id           :integer          not null, primary key
#  name         :text
#  image        :text
#  height       :integer
#  parent       :text
#  first_ascent :integer
#  country      :text
#  created_at   :datetime         not null
#  updated_at   :dat etime         not null
#

class Mountain < ActiveRecord::Base
end
