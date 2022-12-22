import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    videoUrl: {
        type: String,
        required: true
    },
    text: {
        type: String
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Video', VideoSchema)