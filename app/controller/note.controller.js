const NoteService = require('../services/note.service')

class NoteController{
    constructor(){

    }
    addNote(req,res){
        var noteService = new NoteService()    
        req.assert('title', 'title cannot be blank').notEmpty();
        req.assert('content', 'content cannot be blank').notEmpty();
      
        // Check for validation errors    
        var errors = req.validationErrors();
        if (errors) { return res.status(400).send(errors); }
      else{
          noteService.addNote(req,res)

    }
}
}
module.exports=NoteController