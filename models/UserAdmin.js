import mongoose from "mongoose";

const UserAdminSchema = new mongoose.Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    passwordHash : {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('UserAdmin', UserAdminSchema)