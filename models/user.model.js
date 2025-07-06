 import mongoose from "mongoose";

 const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        expCategories: {
            type: Array,
            required: true,
        },
        incCategories: {
            type: Array,
            required: true,
        },
        incTransactions: {
            type: Array,
            required: true,
        },
        expTransactions: {
            type: Array,
            required: true,
        },
        
    },
    {
        timestamps: true,
    }
 );
 const User = mongoose.model("user", userSchema);
 export default User;