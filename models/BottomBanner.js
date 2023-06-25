import mongoose from "mongoose";

const BottomBannerSchema = new mongoose.Schema({
    images: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default  mongoose.model('BottomBanner', BottomBannerSchema)