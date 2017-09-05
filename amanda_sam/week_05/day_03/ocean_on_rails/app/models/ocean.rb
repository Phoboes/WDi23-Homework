# == Schema Information
#
# Table name: oceans
#
#  id         :integer          not null, primary key
#  name       :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#


class Ocean < ActiveRecord::Base
end
