class Car < ApplicationRecord
  extend FriendlyId
  friendly_id :model, use: :slugged

  belongs_to :manufacturer
end
