const {Router} = require('express')
const Post = require('../models/Post')
const config = require('config')
const router = Router()
const auth = require('../middleware/auth.middleware')

router.post('/generate',auth,async (req,res)=>{
    try{
        const {imgUrl,title,text,description} = req.body
        const baseUrl = config.get('baseUrl')
        const post = new Post({imgUrl,title,text,description, owner: req.user.userId})

        await post.save()

        res.status(201).json({post})

    }catch(e){
        res.status(500).json({message: `Ошибка сервера из post router: ${e}`})
    }
})

router.get('/',async(req,res)=>{
    try{
        const posts = await Post.find()
        res.json(posts)
    }catch(e){
        res.status(500).json({message: `Ошибка сервера из post router: ${e}`})
    }
})// получаем все посты

router.get('/:id',async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id)
        res.json(post)
    }catch(e){
        res.status(500).json({message: `Ошибка сервера из post router: ${e}`})
    }
})

module.exports = router