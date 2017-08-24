class CreateAuthors < ActiveRecord::Migration[5.1]
  def change
    create_table :authors do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :image
    end
  end
end
