import SalesModel from '../models/Sales.js'

export const getAllSales = async (req, res) => {
    try {
         const sales = await SalesModel.find();
        res.json(sales)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все акции'
        })
    }
}

export const getOneSales = async (req, res) => {
    try {
        const salesId = req.params.id

        SalesModel.findByIdAndUpdate({
            _id: salesId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить акцию'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Акция не найдена'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все акции'
        })
    }
}

export const removeSales = async (req, res) => {
    try {
        const salesId = req.params.id
        SalesModel.findByIdAndDelete({
            _id: salesId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить акцию'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Акция не найдена'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить'
        })
    }
}

export const createSales =  async (req, res) => {
    try {
        const doc = new SalesModel({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            descriptionFull: req.body.descriptionFull,
            date: req.body.date

        })
        const sales = await doc.save()
        res.json(sales)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать акцию'
        })
    }
}

export const updateSales =  async (req, res) => {
    try {
        const salesId = req.params.id

        await SalesModel.updateOne({
            _id: salesId
        }, {
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            descriptionFull: req.body.descriptionFull,
            date: req.body.date
        })
        res.json({success: true})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить акцию'
        })
    }
}