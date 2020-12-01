const {Router} = require('express')
const config = require('config')
const router = Router()
const fetch = require('node-fetch')

// api/auth/register
router.post('/community',async(req,res)=>{
    try{
        const {name, title, text} = req.body

        let url = `https://api.telegram.org/bot${config.get("botToken")}/sendMessage?chat_id=-1001332959451&text=`
        let message = `name:${encodeURIComponent(name)}\n\n title:${encodeURIComponent(title)}\n\n text:${encodeURIComponent(text)}`
        
        await fetch(url + message)

        res.status(201).json({message: 'Статья была отправлена'})
    }catch(e){
        res.status(500).json({message: `Ошибка сервера ${e}`})
    }
})

module.exports = router
 
//https://api.telegram.org/bot1394975541:AAF0Zj8rj9lbnKpvLjJDu4udbObxZnIo2FU/getUpdates
//https://api.telegram.org/bot1394975541:AAF0Zj8rj9lbnKpvLjJDu4udbObxZnIo2FU/sendMessage?chat_id=1049971898&text=hi