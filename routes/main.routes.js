const {Router} = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const User = require('../models/User')
const { check, validationResult } = require('express-validator')
const router = Router()

// api/auth/register
// router.post('/register',
// [
//     check('email','Некорректный email').isEmail(),
//     check('password','Минимальная длина пароля 6 символов').isLength({min: 6})
// ],
// async(req,res)=>{
//     try{

//         const errors = validationResult(req)// массив который мы создали выше(если в нём что-то есть то это значит что возникли неполадки (неверно введен email или password))

//         if(!errors.isEmpty()){
//             return res.status(400).json({
//                 errors: errors.array(),
//                 message: 'Некорректные данные при регистрации'
//             })
//         }

//         const {email,password} = req.body
        
//         const candidate = await User.findOne({email})
//         if(candidate){
//             res.status(400).json({message: 'Пользователь уже существует'})
//         }

//         const hashedPassword = await bcrypt.hash(password, 12)
//         const user = new User({email,password: hashedPassword}) 
//         await user.save()
//         res.status(201).json({message: 'Пользователь создан'})
//         console.log(req.body)
//     }catch(e){
//         res.status(500).json({message: `Ошибка сервера ${e}`})
//     }
// })

// api/auth/login
router.post('/login',
[
    check('email','Введите корректный email').normalizeEmail().isEmail(),
    check('password','Введите пароль').exists()
],
async(req,res)=>{
    try{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            res.status(400).json({
                errors: errors.array(),
                message: 'Некоректные данные при входе в систему'
            })
        }
        const {email,password} = req.body
        
        const user = await User.findOne({email})

        if(!user){
            res.status(400).json({message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password,user.password)

        if(!isMatch){
            return res.status(400).json({message: 'Неправильный логин или пароль'})
        }

        const token = jwt.sign(
            {userId: user.id},// 1 параметр это объект в который мы передаём все параметры которые будут зашифрованы в данном jwt токене
            config.get('jwtSecret'),// 2 параметром мы передаём секретный ключь (который придумаем)
            {expiresIn: '168h'}// 3 параметр это объект в котором мы передаём через сколько времени наши jwt токены окончат своё существование
            //принимает в себя 3 параметра
        )
        res.json({token,userId:user.id})
    }catch(e){
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
})

module.exports = router