import GalleryModel from '../models/Gallery.js'

export const getAllGallery = async (req, res) => {
    try {
         const gallery = await GalleryModel.find({
                 branch: new RegExp(req.query.branch, 'i')
             });
        res.json(gallery)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все картинки'
        })
    }
}

export const getOneGallery = async (req, res) => {
    try {
        const galleryId = req.params.id

        GalleryModel.findByIdAndUpdate({
            _id: galleryId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить картинку'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Картинка не найдена'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все  картинки'
        })
    }
}

export const removeGallery = async (req, res) => {
    try {
        const galleryId = req.params.id
        GalleryModel.findByIdAndDelete({
            _id: galleryId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить картинку'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Картинка не найдена'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить картинку'
        })
    }
}

export const createGallery =  async (req, res) => {
    try {
        const doc = new GalleryModel({
            imageUrl: req.body.imageUrl,
            text: req.body.text,
            branch: req.body.branch
        })
        const gallery = await doc.save()
        res.json(gallery)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось добавить картинку'
        })
    }
}

