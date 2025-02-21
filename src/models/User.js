import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
