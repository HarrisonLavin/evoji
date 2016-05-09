class ChangesToEntryModel < ActiveRecord::Migration
  def change

    add_column :entries, :despair, :boolean, default: false
    add_column :entries, :rage, :boolean, default: false
  end
end
