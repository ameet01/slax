class ChangeDefaultUsersPic < ActiveRecord::Migration[5.1]
  def change
    change_column :users, :image_url, :string, null: false, default: 'https://vignette.wikia.nocookie.net/maa2/images/8/82/Ironman_CW_two-shot.png'
  end
end
