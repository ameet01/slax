class AddIsDmToChannels < ActiveRecord::Migration[5.1]
  def change
    add_column :channels, :is_dm, :boolean, default: false, null: false
  end
end
