import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    // married:{
    //     type: Boolean,
    //     required: true,
    // },
    // children:{
    //     type: Boolean,
    //     default: false
    // },
    passwordHash : {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    orders : {
        type: Array,
        default: []
    }
}, {
    timestamps: true,
})

export default  mongoose.model('User', UserSchema)