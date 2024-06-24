const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const answerSchema=new mongoose.Schema({
    question_id:{
        type:Schema.Types.ObjectId,
        ref:'Question',
    },
    text:{
        type:String,
        required:[true,'text cannot be empty']
    },
    user_id:{
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    created_at:{
        type:Date,
        default:Date.now()  
    }


});

const Answer=mongoose.model('Answer',answerSchema);
module.exports=Answer;