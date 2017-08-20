class Publisher < ActiveRecord::Base
    def heroes
        Hero.all.where(publisher_id: self.id)
    end

    def villains
        Villain.all.where(publisher_id: self.id)
    end
end
