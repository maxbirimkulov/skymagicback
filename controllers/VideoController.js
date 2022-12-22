import VideoModel from '../models/Video.js'

export const getAllVideo = async (req, res) => {
    try {
         const video = await VideoModel.find();
        res.json(video)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все видео'
        })
    }
}

export const getOneVideo = async (req, res) => {
    try {
        const videoId = req.params.id

        VideoModel.findByIdAndUpdate({
            _id: videoId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить видео'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Видео не найдена'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все  видео'
        })
    }
}

export const removeVideo = async (req, res) => {
    try {
        const videoId = req.params.id
        VideoModel.findByIdAndDelete({
            _id: videoId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить видео'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Видео не найдена'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить видео'
        })
    }
}

export const createVideo =  async (req, res) => {
    try {
        const doc = new VideoModel({
            videoUrl: req.body.videoUrl,
            text: req.body.text,
        })
        const video = await doc.save()
        res.json(video)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось добавить видео'
        })
    }
}

