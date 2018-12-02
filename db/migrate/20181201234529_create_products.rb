class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title, null: false, default: ''
      t.integer :price, null: false, default: 0
      t.string :image_url, default: ''

      t.timestamps
    end
  end
end
