import mongoose from "mongoose";

const userSchema=mongoose.Schema(
    {
        name: { type: String, required:  true },
        firstName: {type: String, require: true},
        lastName:  {type: String, require: true},
        email:  {type: String, require: true},
        password:  {type: String, require: true},
        id: String,
        createdAt: {
            type: Date,
            default: new Date()
        }
    }
);

const User=mongoose.model("User", userSchema);

export default User;