import mongoose from "mongoose";

const VacanciesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    responsibilities: {
        type: Array
    },
    requirement : {
        type: Array
    } ,
    branch : {
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Vacancies', VacanciesSchema)