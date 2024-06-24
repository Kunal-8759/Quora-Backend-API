const mongoose =require('mongoose');
const Schema=mongoose.Schema;

const commentSchema=new mongoose.Schema({
    text:{
        type:String,
        required:[true,'text cannot be empty']
    },
    user_id:{//yahan error aa skt hai
        type:Schema.Types.ObjectId,
        ref:'User',
        required:true

    },
    created_at:{
        type:Date,
        default:Date.now()  
    },
    parent_id:{
        type: Schema.Types.ObjectId,
        refPath: 'parentModel',
    },
    parentModel: {
        type: String,
        required: true,
        enum: ['Answer', 'Comment'],  // Replace 'Answer' and 'Comment' with the actual model names
    }

});

const Comment=mongoose.model('Comment',commentSchema);
module.exports=Comment;