class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.text :title
      t.text :year
      t.text :genre
      t.text :image
    end
  end
end
