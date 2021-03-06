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

ActiveRecord::Schema.define(version: 20170417162154) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "collaborations", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "collaborator_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.boolean  "status"
    t.index ["collaborator_id"], name: "index_collaborations_on_collaborator_id", using: :btree
    t.index ["user_id"], name: "index_collaborations_on_user_id", using: :btree
  end

  create_table "messages", force: :cascade do |t|
    t.text     "body"
    t.string   "attachment"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.integer  "collaboration_id"
    t.integer  "user_id"
    t.index ["user_id"], name: "index_messages_on_user_id", using: :btree
  end

  create_table "ratings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "collab"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text     "review"
    t.integer  "reviewer"
    t.integer  "demo"
    t.index ["user_id"], name: "index_ratings_on_user_id", using: :btree
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["tag_id"], name: "index_taggings_on_tag_id", using: :btree
    t.index ["user_id"], name: "index_taggings_on_user_id", using: :btree
  end

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "bio"
    t.boolean  "artist",          default: false
    t.boolean  "producer",        default: false
    t.boolean  "engineer",        default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "token"
    t.string   "photo"
    t.string   "audio"
    t.boolean  "email_confirmed"
    t.string   "confirm_token"
  end

  add_foreign_key "collaborations", "users"
  add_foreign_key "messages", "users"
  add_foreign_key "ratings", "users"
  add_foreign_key "taggings", "tags"
  add_foreign_key "taggings", "users"
end
