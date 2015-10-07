class CreateIssues < ActiveRecord::Migration
  def change
    create_table :issues do |t|
      t.string :title
      t.attachment :issue_file

      t.timestamps null: false
    end
  end
end
