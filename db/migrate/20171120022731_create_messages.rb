class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :body, null: false
      t.integer :user_id, null: false
      t.integer :channel_id, null: false
      t.timestamps
    end
    add_index :messages, [:user_id, :channel_id]
    add_index :messages, :user_id
    add_index :messages, :channel_id
  end
end
