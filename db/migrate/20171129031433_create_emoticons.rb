class CreateEmoticons < ActiveRecord::Migration[5.1]
  def change
    create_table :emoticons do |t|
        t.integer :user_id, null: false
        t.integer :message_id, null: false
        t.string :icon, null: false
        t.timestamps
    end
    add_index :emoticons, :user_id, using: :btree
    add_index :emoticons, :message_id, using: :btree
  end
end
