import BannerModel from '../models/Banner.js'

export const getAllBanners = async (req, res) => {
    try {
         const banners = await BannerModel.find({
             branch: new RegExp(req.query.title, 'i')
           });
        res.json(banners)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все баннеры'
        })
    }
}

export const getOneBanner = async (req, res) => {
    try {
        const bannerId = req.params.id

        BannerModel.findByIdAndUpdate({
            _id: bannerId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить баннер'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Баннер не найден'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все баннеры'
        })
    }
}

export const removeBanner = async (req, res) => {
    try {
        const bannerId = req.params.id
        BannerModel.findByIdAndDelete({
            _id: bannerId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить баннер'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Баннер не найден'
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

export const createBanner =  async (req, res) => {
    try {
        const doc = new BannerModel({
            title: req.body.title,
            text : req.body.text,
            images : req.body.images,
            branch : req.body.branch

        })
        const banners = await doc.save()
        res.json(banners)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать баннер'
        })
    }
}

export const updateBanner =  async (req, res) => {
    try {
        const bannerId = req.params.id

        await BannerModel.updateOne({
            _id: bannerId
        }, {
            title: req.body.title,
            text : req.body.text,
            images : req.body.images
        })
        res.json({success: true})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить баннер'
        })
    }
}