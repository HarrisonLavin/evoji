class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.integer :quality

      t.timestamps null: false
    end
  end
end
