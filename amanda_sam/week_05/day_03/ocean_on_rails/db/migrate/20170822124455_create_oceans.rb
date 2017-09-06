class CreateOceans < ActiveRecord::Migration[5.1]
  def change
    create_table :oceans do |t|
      t.text :name
      t.text :image
      t.text :area
      t.float :volume
      t.float :depth

      t.timestamps
    end
  end
end
