const mongoose = require ('mongoose')
const Schema = mongoose.Schema
const NoteSchema = mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            max: 20
        },

        content:{
            type: String,
            required: true,
        },
        userId:{ type: Schema.Types.ObjectId, ref: 'User' },
    },    
    {
        timestamps: true
    }
)
module.exports = mongoose.model('Note',NoteSchema); 
