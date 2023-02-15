import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    branch: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Review', ReviewSchema)