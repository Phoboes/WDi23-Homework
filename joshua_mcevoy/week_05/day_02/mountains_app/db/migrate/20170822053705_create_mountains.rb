class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.text :name
      t.text :image
      t.text :first_climber
      t.float :year_climbed
      t.float :height
      t.float :deaths
      t.timestamps
    end
  end
end
