class CreateManufacturers < ActiveRecord::Migration[5.1]
  def change
    create_table :manufacturers do |t|
      t.string :name
      t.string :founded
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
