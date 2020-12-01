const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req,res,next)=>{
    if(req.method === "OPTIONS"){
        next()
    }

    try{
        const token = req.headers.authorization.split(' ')[1]

        if(!token){
            return res.status(401).json({message: 'Нет авторизации'})
        }

        const decoded = jwt.verify(token,config.get('jwtSecret'))// jwt.verify позволяет раскодировать токен, первым параметром передаём токен а вторым jwtSecret
        req.user = decoded // создаём поле user в req и кладём туда раскодированный токен
        next() // продолжает выполнение запроса
    }catch{
        return res.status(401).json({message: 'Нет авторизации'})
    }
}