const {model,Schema,Types} = require('mongoose')

const schema = new Schema({
    imgUrl: {
        type: String,
        required: true
    },// ссылка на картинку поста
    title:{
        type: String,
        required: true
    },// заголовок поста
    text:{
        type:String,
        required: true
    },// текст ресурса
    date:{
        type: Date,
        default: Date.now
    },// дата создания поста
    description:{
        type: String,
        required: true
    },
    link:{
        type: String,
        required: false
    },
    owner:{
        type: Types.ObjectId,
        ref: 'User'
    }// создатель поста   
})

module.exports = model('Resource',schema)