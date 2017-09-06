class CreateMovies < ActiveRecord::Migration[5.0]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :image
      t.text :released_date
      t.integer :ratings
      t.text :synopsis
      t.timestamps
    end
  end
end
