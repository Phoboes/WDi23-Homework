class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.text :title
      t.text :author
      t.text :publisher
      t.date :publication_date
      t.text :image
      t.timestamps
    end
  end
end
