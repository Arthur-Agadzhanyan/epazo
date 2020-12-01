const express = require('express')
const config = require('config')
const path = require('path')
const mongoose = require('mongoose')
const app = express()
const compression = require('compression')

app.use(compression())// сжимаем текст в gzip

app.use(express.json({extended: true}))// мы подключаем этот мидлвеар для того чтобы хорошо обрабатывать req.body
app.use('/api/auth',require('./routes/main.routes'))
app.use('/api/post',require('./routes/post.routes'))
app.use('/api/resources', require('./routes/resources.routes'))
app.use('/api/bot', require('./routes/bot.routes'))

// позволяет при перезагрузке страницы не выдавать код 404
app.use('/', express.static(path.join(__dirname,'client','build')))

app.get('/*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'))
})


const PORT = config.get('PORT') || 80

async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(process.env.PORT || PORT,()=>{
            console.log(`Server has been started on port: ${PORT}`)
        })
    }catch(e){
        console.log('Server Error',e)
        process.exit(1)
    }
}

start()