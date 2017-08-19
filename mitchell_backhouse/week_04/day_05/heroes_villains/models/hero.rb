class Hero < ActiveRecord::Base
    self.table_name = 'heroes'

    has_one :publisher

    def publisher_name
        Publisher.find(self.publisher_id).name
    end
end
