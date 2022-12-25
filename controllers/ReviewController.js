import ReviewModel from '../models/Review.js'

export const getAllReview = async (req, res) => {
    try {
         const review = await ReviewModel.find();
        res.json(review)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все отзывы'
        })
    }
}

export const getOneReview = async (req, res) => {
    try {
        const reviewId = req.params.id

        ReviewModel.findByIdAndUpdate({
            _id: reviewId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить отзыв'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Отзвы не найден'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все отзывы'
        })
    }
}

export const removeReview = async (req, res) => {
    try {
        const reviewId = req.params.id
        ReviewModel.findByIdAndDelete({
            _id: reviewId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить отзыв'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Отзыв не найден'
                })
            }

            res.json({success: true})
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось удалить отзыв'
        })
    }
}

export const createReview =  async (req, res) => {
    try {
        const doc = new ReviewModel({
            name: req.body.name,
            text : req.body.text

        })
        const review = await doc.save()
        res.json(review)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать отзыв'
        })
    }
}

