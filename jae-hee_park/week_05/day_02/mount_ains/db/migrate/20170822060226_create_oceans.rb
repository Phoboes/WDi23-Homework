class CreateOceans < ActiveRecord::Migration[5.1]
  def change
    create_table :oceans do |t|
      t.text :name
      t.text :image
      t.float :area
      t.float :depth
      t.float :width
      t.timestamps
    end
  end
end
