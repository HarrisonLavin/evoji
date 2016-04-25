class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :quality
      t.boolean :binged?
      t.boolean :suicidal_ideation?


      t.timestamps null: false
    end
  end
end
