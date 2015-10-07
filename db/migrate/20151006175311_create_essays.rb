class CreateEssays < ActiveRecord::Migration
  def change
    create_table :essays do |t|
      t.string :title
      t.string :author
      t.references :issue, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
