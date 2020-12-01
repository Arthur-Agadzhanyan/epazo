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
    },// текст поста
    // code:{
    //     type: String,
    //     required: true,
    //     unique: true
    // },// хз для чего но это надо
    date:{
        type: Date,
        default: Date.now
    },// дата создания поста
    clicks: {
        type: Number,
        default: 0
    },// буду использовать в качестве лайков
    description: {
        type: String,
        required: true
    },// описание 
    owner:{
        type: Types.ObjectId,
        ref: 'User'
    }// создатель поста
})

module.exports = model('Post',schema)