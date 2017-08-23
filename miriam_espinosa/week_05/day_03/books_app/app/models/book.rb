# == Schema Information
#
# Table name: books
#
#  id               :integer          not null, primary key
#  title            :text
#  author           :text
#  publisher        :text
#  publication_date :date
#  image            :text
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#

class Book < ActiveRecord::Base
  belongs_to :author
end
