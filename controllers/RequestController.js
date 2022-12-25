import RequestModel from '../models/Request.js'

export const getAllRequest = async (req, res) => {
    try {
         const request = await RequestModel.find({
             goal: new RegExp(req.query.goal, 'i')
         });
        res.json(request)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все заявки'
        })
    }
}

export const getOneRequest = async (req, res) => {
    try {
        const requestId = req.params.id

        RequestModel.findByIdAndUpdate({
            _id: requestId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить заявку'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Заявка не найден'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все заявки'
        })
    }
}

export const removeRequest = async (req, res) => {
    try {
        const requestId = req.params.id
        RequestModel.findByIdAndDelete({
            _id: requestId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить заявку'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Заявка не найден'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить заявку'
        })
    }
}

export const createRequest =  async (req, res) => {
    try {
        const doc = new RequestModel({
            name: req.body.name,
            phone: req.body.phone,
            text: req.body.text,
            goal: req.body.goal

        })
        const request = await doc.save()
        res.json(request)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать заявку'
        })
    }
}

