import mongoose from "mongoose";

const RequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    goal: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Request', RequestSchema)