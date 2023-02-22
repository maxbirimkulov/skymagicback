import mongoose from "mongoose";

const SalesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    descriptionFull: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Sales', SalesSchema)