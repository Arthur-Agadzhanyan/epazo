const {Router} = require('express')
const router = Router()
const config = require('config')
const Resource = require('./../models/Resource')
const auth = require('../middleware/auth.middleware')

router.post('/generate',auth,async (req,res)=>{
    try{
        const {imgUrl,title,text,link,description} = req.body
        const baseUrl = config.get('baseUrl')
        const resource = new Resource({imgUrl,title,text,link,description, owner: req.user.userId})

        await resource.save()

        res.status(201).json({resource})

    }catch(e){
        res.status(500).json({message: `Ошибка сервера из resource router: ${e}`})
    }
})

router.get('/',async(req,res)=>{
    try{
        const resources = await Resource.find()
        res.json(resources)
    }catch(e){
        res.status(500).json({message: `Ошибка сервера из resources router: ${e}`})
    }
})// получаем resources

router.get('/:id',async(req,res)=>{
    try{
        const resource = await Resource.findById(req.params.id)
        res.json(resource)
    }catch(e){
        res.status(500).json({message: `Ошибка сервера из resource router: ${e}`})
    }
})

module.exports = router