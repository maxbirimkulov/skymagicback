import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true,
    },
    text : {
        type: String,
        required: true
    },
    branch : {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Banner', BannerSchema)