import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema({
    title: {
        type: String
    },
    title2: {
        type: String
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})

export default  mongoose.model('Events', EventsSchema)