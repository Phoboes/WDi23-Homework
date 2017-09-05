class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :year
      t.text :genre
      t.text :image
      t.timestamps
    end
  end
end
