import VacanciesModel from '../models/Vacancies.js'

export const getAllVacancies = async (req, res) => {
    try {
         const vacancies = await VacanciesModel.find();
        res.json(vacancies)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все вакансии'
        })
    }
}

export const getOneVacancies = async (req, res) => {
    try {
        const vacanciesId = req.params.id

        VacanciesModel.findByIdAndUpdate({
            _id: vacanciesId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить вакансию'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'вакансия не найдена'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все вакансии'
        })
    }
}

export const removeVacancies = async (req, res) => {
    try {
        const vacanciesId = req.params.id
        VacanciesModel.findByIdAndDelete({
            _id: vacanciesId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить вакансию'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'вакансия не найдена'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить вакансию'
        })
    }
}

export const createVacancies =  async (req, res) => {
    try {
        const doc = new VacanciesModel({
            title: req.body.title,
            description : req.body.description,
            responsibilities : req.body.responsibilities,
            requirement : req.body.requirement

        })
        const vacancies = await doc.save()
        res.json(vacancies)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать вакансию'
        })
    }
}

export const updateVacancies =  async (req, res) => {
    try {
        const vacanciesId = req.params.id

        await VacanciesModel.updateOne({
            _id: vacanciesId
        }, {
            title: req.body.title,
            description : req.body.description,
            responsibilities : req.body.responsibilities,
            requirement : req.body.requirement
        })
        res.json({success: true})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить вакансию'
        })
    }
}