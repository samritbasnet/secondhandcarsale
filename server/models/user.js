import mongoose
from "mongoose";

import bcrypt from "bcrypt";

const UserSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
})