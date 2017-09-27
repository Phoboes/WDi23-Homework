class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.text :name
      t.text :image
      t.text :country
      t.integer :elevation
      t.timestamps
    end
  end
end
