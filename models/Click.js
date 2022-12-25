import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    id: {
        type: String,
        default: null
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Click', ClickSchema)