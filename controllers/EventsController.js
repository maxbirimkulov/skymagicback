import EventsModel from '../models/Events.js'

export const getAllEvents = async (req, res) => {
    try {
         const events = await EventsModel.find();
        res.json(events)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все события'
        })
    }
}

export const getOneEvent = async (req, res) => {
    try {
        const eventId = req.params.id

        EventsModel.findByIdAndUpdate({
            _id: eventId,
        },{},{
            returnDocument: 'after',
        }, (err, doc) => {
            if (err) {
                console.log(err)
               return  res.status(500).json({
                    message: 'Не удалось получить событие'
                })
            }
            if (!doc) {
                return res.status(404).json({
                    message: 'Событие не найдено'
                })
            }

            res.json(doc)
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось получить все события'
        })
    }
}

export const removeEvent = async (req, res) => {
    try {
        const eventId = req.params.id
        EventsModel.findByIdAndDelete({
            _id: eventId
        }, (err, doc) => {
            if (err){
                console.log(err)
                return  res.status(500).json({
                    message: 'Не удалось удалить событие'
                })
            }

            if (!doc){
                return res.status(404).json({
                    message: 'Событие не найден'
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

export const createEvent =  async (req, res) => {
    try {
        const doc = new EventsModel({
            title: req.body.title,
            title2: req.body.title2,
            description: req.body.description

        })
        const events = await doc.save()
        res.json(events)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось создать событие'
        })
    }
}

export const updateEvent =  async (req, res) => {
    try {
        const eventId = req.params.id

        await EventsModel.updateOne({
            _id: eventId
        }, {
            title: req.body.title,
            title2: req.body.title2,
            description: req.body.description
        })
        res.json({success: true})
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: 'Не удалось обновить событие'
        })
    }
}