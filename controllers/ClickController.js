import ClickModel from '../models/Click.js'

export const getAllClick= async (req, res) => {
    try {
         const click = await ClickModel.find({
             url: new RegExp(req.query.url, 'i')
         });
        res.json(click)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все клики'
        })
    }
}

export const getOneClick = async (req, res) => {
    try {
        const clickId = req.params.id

        ClickModel.findByIdAndUpdate({
            _id: clickId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить клики'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Клики не найден'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все клики'
        })
    }
}

export const removeClick = async (req, res) => {
    try {
        const clickId = req.params.id
        ClickModel.findByIdAndDelete({
            _id: clickId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить клик'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Клик не найден'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить клик'
        })
    }
}

export const createClick =  async (req, res) => {
    try {
        const doc = new ClickModel({
            url: req.body.url,
            id : req.body.id

        })
        const click = await doc.save()
        res.json(click)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать клик'
        })
    }
}

