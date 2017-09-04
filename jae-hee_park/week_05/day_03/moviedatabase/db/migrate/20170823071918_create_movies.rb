class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :name
      t.date :release
      t.text :genre
      t.text :image
      t.timestamps
    end
  end
end
