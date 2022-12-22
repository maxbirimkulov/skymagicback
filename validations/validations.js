import {body} from "express-validator";

export const loginValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
]

export const loginAdminValidation = [
    body('login', 'Неверный Логин').isString(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
]

export const registerValidation = [
    body('email', 'Неверный формат почты').isEmail(),
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('login', 'Укажите Логин').isLength({min: 3}),
    body('name', 'Укажите Имя').isLength({min: 3}),
    body('surname', 'Укажите Фамилие').isLength({min: 3}),
    body('gender', 'Укажите пол'),
    body('age', 'Укажите возраст').isNumeric(),
    // body('married', 'Укажите семейное положение').isBoolean(),
    body('phone', 'Укажите номер телефона').isLength({min: 12})
]
export const registerAdminValidation = [
    body('password', 'Пароль должен быть минимум 5 символов').isLength({min: 5}),
    body('login', 'Укажите Логин').isLength({min: 3}),
    body('name', 'Укажите Имя').isLength({min: 3}),
    body('surname', 'Укажите Фамилие').isLength({min: 3}),
    body('phone', 'Укажите номер телефона').isLength({min: 12})
]

export const clothesCreateValidation = [
    body('title', 'Введите название товара').isLength({min: 3}).isString(),
    body('price', 'Введите цену товара').isNumeric(),
    body('priceSale', 'Введите аукционную цену товара').optional().isNumeric(),
    body('sizes', 'Неверный формат размеров (укажите массив)').optional().isArray(),
    body('inStock', 'Неверный формат размеров (укажите массив)').optional().isNumeric(),
    body('colors', 'Неверный формат цвета').isLength({min: 3}).isString(),
    body('images', 'Неверный формат картинок (укажите массив)').optional().isArray(),
    body('category', 'Введите категорию').isString(),
    body('gender', 'Введите пол').optional().isString()
]

export const addOrderValidation = [
    body('name', 'Введите ваше имя').isLength({min: 3}).isString(),
    body('surname', 'Введите ваше фамилие').isLength({min: 3}).isString(),
    body('email', 'Введите ваш email').isLength({min: 3}).isEmail(),
    body('phone', 'Введите ваш номер телефона').isLength({min: 12}),
    body('orders', 'Сделайте покупку').isArray(),
]

export const addBannerValidation = [
    body('title', 'Введите название баннера').isString(),
    body('text', 'Введите текст баннера').isString(),
    body('images', 'Введите картинку баннера').isString(),
    body('branch', 'Выберите филиал баннера').isString()
]
export const addVacanciesValidation = [
    body('title', 'Введите название вакансии').isString(),
    body('description', 'Введите описание вакансии').isString(),
    body('responsibilities', 'Введите требования вакансии').isArray(),
    body('requirement', 'Введите обязанности вакансии').isArray(),
    body('branch', 'Введите филиал вакансии')
]

