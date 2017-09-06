class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.text :name
      t.text :image
      t.text :location
      t.float :elevation
      t.float :prominence
      t.float :isolation
      t.timestamps
    end
  end
end
