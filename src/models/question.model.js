const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const questionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title cannot be empty']
    },
    body:{
        type:String,
        required:[true,'body cannot be empty']
    },
    user_id:{//yahan error aa skt hai
        type:Schema.Types.ObjectId,
        ref:'User',
        required:[true,'user_id cannot be empty']
    },
    topics:[{
        type:Schema.Types.ObjectId,
        ref:'Topic'

    }],
    created_at:{
        type:Date,
        default:Date.now()  
    }


});

const Question=mongoose.model('Question',questionSchema);
module.exports=Question;