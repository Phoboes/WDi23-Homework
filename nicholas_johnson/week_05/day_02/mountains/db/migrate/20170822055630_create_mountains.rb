class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
			t.text :name
			t.text :image
			t.float :height
			t.text :country
    end
  end
end
