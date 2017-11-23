class AddImageUrlToUsers < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image_url, :string, null: false, default: 'https://rlv.zcache.com/iron_man_assemble_square_sticker-r5962aceb77654e31b7642af0558ebbce_v9i40_8byvr_324.jpg'
  end
end
