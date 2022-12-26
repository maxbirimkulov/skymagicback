import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    branch: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Gallery', GallerySchema)