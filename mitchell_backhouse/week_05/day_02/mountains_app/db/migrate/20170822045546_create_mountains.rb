class CreateMountains < ActiveRecord::Migration[5.1]
  def change
    create_table :mountains do |t|
      t.string :name
      t.string :image
      t.string :location
      t.float :elevation
      t.string :description

      t.timestamps
    end
  end
end
