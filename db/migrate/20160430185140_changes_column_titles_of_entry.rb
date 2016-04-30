class ChangesColumnTitlesOfEntry < ActiveRecord::Migration
  def change
    rename_column :entries, :binged?, :binged
    rename_column :entries,:suicidal_ideation?, :suicidal
  end
end
