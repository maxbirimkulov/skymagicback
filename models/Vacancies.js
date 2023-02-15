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
    salary:{
        type: String,
        required: true
    },
    graph:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
})

export default  mongoose.model('Vacancies', VacanciesSchema)