class CreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.text :name
      t.date :dob
      t.text :image
      t.text :nationality
      t.timestamps
    end
  end
end
