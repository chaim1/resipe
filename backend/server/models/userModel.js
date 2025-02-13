const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true, required: true },
  fullName: { },
  userName: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  imageUser: { type: String },
  date:{type: Date, default: new Date()},
  req:{type: Object},
  tokens: [
    {
      token: {
        type: String
      }
    }
  ],
  followingId: [String]
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);
