import BottomBannerModel from '../models/BottomBanner.js'

export const getAllBottomBanners = async (req, res) => {
    try {
         const banners = await BottomBannerModel.find();
        res.json(banners)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все баннеры'
        })
    }
}

export const getOneBottomBanner = async (req, res) => {
    try {
        const bannerId = req.params.id

        BottomBannerModel.findByIdAndUpdate({
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

export const removeBottomBanner = async (req, res) => {
    try {
        const bannerId = req.params.id
        BottomBannerModel.findByIdAndDelete({
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

export const createBottomBanner =  async (req, res) => {
    try {
        const doc = new BottomBannerModel({
            images : req.body.images,
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

export const updateBottomBanner =  async (req, res) => {
    try {
        const bannerId = req.params.id

        await BottomBannerModel.updateOne({
            _id: bannerId
        }, {
            images : req.body.images,
        })
        res.json({success: true})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить баннер'
        })
    }
}