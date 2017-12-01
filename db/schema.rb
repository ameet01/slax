# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171201194858) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "channels", force: :cascade do |t|
    t.string "name", null: false
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "is_dm", default: false, null: false
  end

  create_table "emoticons", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "message_id", null: false
    t.string "icon", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["message_id"], name: "index_emoticons_on_message_id"
    t.index ["user_id", "message_id"], name: "index_emoticons_on_user_id_and_message_id"
    t.index ["user_id"], name: "index_emoticons_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.string "body", null: false
    t.integer "user_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_messages_on_channel_id"
    t.index ["user_id", "channel_id"], name: "index_messages_on_user_id_and_channel_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "subscriptions", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "channel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["channel_id"], name: "index_subscriptions_on_channel_id"
    t.index ["user_id", "channel_id"], name: "index_subscriptions_on_user_id_and_channel_id"
    t.index ["user_id"], name: "index_subscriptions_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.string "image_url", default: "https://vignette.wikia.nocookie.net/maa2/images/8/82/Ironman_CW_two-shot.png", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
