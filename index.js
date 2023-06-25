import express from 'express'
import multer from 'multer'
import cors from 'cors'
import mongoose from 'mongoose'
import {
    registerValidation,
    loginValidation,
    clothesCreateValidation,
    addOrderValidation,
    loginAdminValidation,
    registerAdminValidation,
    addBannerValidation,
    addVacanciesValidation
} from './validations/validations.js'
import checkAuth from "./utils/checkAuth.js";
import {
    register,
    getMe,
    login,
    getAllUser,
    handleFavorites,
    handleOrders,
    getAllOrders, handleStatus
} from './controllers/UserController.js'
import handleValidatorErrors from "./utils/handleValidatorErrors.js";
import UserModel from "./models/User.js";
import {createOrder} from "./controllers/OrderController.js";
import {getAllUserAdmin, getMeAdmin, loginAdmin, registerAdmin} from "./controllers/UserAdminController.js";
import {createBanner, getAllBanners, getOneBanner, removeBanner, updateBanner} from "./controllers/BannerController.js";
import {
    createVacancies,
    getAllVacancies,
    getOneVacancies,
    removeVacancies,
    updateVacancies
} from "./controllers/VacanciesController.js";
import {createGallery, getAllGallery, getOneGallery, removeGallery} from "./controllers/GalleryController.js";
import {createVideo, getAllVideo, getOneVideo, removeVideo} from "./controllers/VideoController.js";
import {createReview, getAllReview, getOneReview, removeReview} from "./controllers/ReviewController.js";
import {createRequest, getAllRequest, getOneRequest, removeRequest} from "./controllers/RequestController.js";
import {createClick, getAllClick, getOneClick, removeClick} from "./controllers/ClickController.js";
import {createEvent, getAllEvents, getOneEvent, removeEvent, updateEvent} from "./controllers/EventsController.js";
import {createSales, getAllSales, getOneSales, removeSales, updateSales} from "./controllers/SalesController.js";
import {
    createBottomBanner,
    getAllBottomBanners,
    getOneBottomBanner, removeBottomBanner,
    updateBottomBanner
} from "./controllers/BottomBannerController.js";


mongoose.connect('mongodb+srv://smagicsite:Smagicsite@smagic.wtnnfw8.mongodb.net/')
    .then(() => console.log('Mongo DB успешно запущен'))
    .catch((err) =>  console.log('Ошибка при запуске Mongo DB ' ,err))


const index = express()

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null,'uploads')
    },
    filename: (_, file, cb) => {
        cb(null,file.originalname)
    }
});

const upload = multer({storage})

index.use(express.json())
index.use(cors())
index.use('/uploads', express.static('uploads'))


const PORT = process.env.PORT || 4444


index.post('/auth/login', loginValidation,handleValidatorErrors, login)
index.post('/auth/register', registerValidation,handleValidatorErrors,  register )
index.post('/auth/admin/login', loginAdminValidation,handleValidatorErrors, loginAdmin)
index.post('/auth/admin/register', registerAdminValidation,handleValidatorErrors,  registerAdmin )
index.get('/banners', getAllBanners)
index.get('/banners/:id', getOneBanner)
index.post('/banners', addBannerValidation,createBanner)
index.patch('/banners/:id',addBannerValidation, updateBanner)


index.get('/bottom/banners', getAllBottomBanners)
index.get('/bottom/banners/:id', getOneBottomBanner)
index.post('/bottom/banners',createBottomBanner)
index.patch('/bottom/banners/:id', updateBottomBanner)
index.patch('/bottom/banners/:id', removeBottomBanner)

index.delete('/banners/:id', removeBanner)




index.get('/events', getAllEvents)
index.get('/events/:id', getOneEvent)
index.post('/events', createEvent)
index.patch('/events/:id',updateEvent)
index.delete('/events/:id', removeEvent)

index.get('/sales', getAllSales)
index.get('/sales/:id', getOneSales)
index.post('/sales', createSales)
index.patch('/sales/:id',updateSales)
index.delete('/sales/:id', removeSales)

index.get('/gallery', getAllGallery)
index.get('/gallery/:id', getOneGallery)
index.post('/gallery', createGallery)
index.delete('/gallery/:id', removeGallery)

index.get('/video', getAllVideo)
index.get('/video/:id', getOneVideo)
index.post('/video', createVideo)
index.delete('/video/:id', removeVideo)

index.get('/vacancies', getAllVacancies)
index.get('/vacancies/:id', getOneVacancies)
index.post('/vacancies', addVacanciesValidation,createVacancies)
index.patch('/vacancies/:id',addVacanciesValidation, updateVacancies)
index.delete('/vacancies/:id', removeVacancies)

index.get('/review', getAllReview)
index.get('/review/:id', getOneReview)
index.post('/review', createReview)
index.delete('/review/:id', removeReview)

index.get('/request', getAllRequest)
index.get('/request/:id', getOneRequest)
index.post('/request', createRequest)
index.delete('/request/:id', removeRequest)

index.get('/click', getAllClick)
index.get('/click/:id', getOneClick)
index.post('/click', createClick)
index.delete('/click/:id', removeClick)

index.patch('/users/favorites/:id', handleFavorites)
index.get('/auth/me', checkAuth ,getMe )
index.get('/auth/admin/me', checkAuth ,getMeAdmin )
index.get('/users', getAllUser)
index.get('/users/admin', getAllUserAdmin)
index.patch('/users/:id', handleOrders)
index.patch('/users/status/:id', handleStatus)


index.get('/orders', getAllOrders)


index.post('/upload',  upload.single('image'), (req, res) => {
    res.json({
        url: `/uploads/${req.file.originalname}`,
    })
})


index.post('/orders', addOrderValidation, createOrder )


index.listen(PORT, (err) => {
    if (err){
       return  console.log('Произошла ошибка', err)
    }
    console.log(`Сервер запущен на порту ${PORT}`)
})