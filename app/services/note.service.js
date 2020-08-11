"use strict"
const Note = require('../model/note.model')
const User = require('../model/user.model')
const userService = require('../services/user.service')
class NoteService{
    constructor(){

    }
    async addNote(req,res){
        try {
            var user = await userService.findValidUserById(req.body.userId)
            if(user){
                var note= new Note({
                    title:req.body.title,
                    content:req.body.content,
                    userId: user._id
                })
                var noteResponse = await Note.create(note)
                res.send(noteResponse)
            }
            else{
                res.send({
                    message:'invalid user'
                })
            }
        } catch (error) {
            throw new Error(error)
        }
    }
}
module.exports=NoteService