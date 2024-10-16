const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupsSchema = new Schema(
  {
    name: { type: String, required: true },
    visibility: { type: Boolean, default: false, required: true },
    admin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    members: [
      { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    ],
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "chat" },
    description: String,
    photoURL: { type: String, default: "placeholder", required: true },
  },
  { timestamps: true }
);
const groups = mongoose.model("groups", groupsSchema);
module.exports = groups;
