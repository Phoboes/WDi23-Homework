class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.text :name
      t.text :image
      t.integer :height
      t.text :parent
      t.integer :first_ascent
      t.text :country
      t.timestamps
    end
  end
end
