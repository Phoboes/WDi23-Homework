class CreateCars < ActiveRecord::Migration[5.1]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.float :hp
      t.float :tq
      t.string :category
      t.string :image
      t.integer :manufacturer_id

      t.timestamps
    end
  end
end
