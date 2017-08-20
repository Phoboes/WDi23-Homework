class Villain < ActiveRecord::Base
    has_one :publisher

    def publisher_name
        Publisher.find(self.publisher_id).name
    end
end
