class AddIndexToEmoticons < ActiveRecord::Migration[5.1]
  def change
    add_index :emoticons, [:user_id, :message_id]
  end
end
