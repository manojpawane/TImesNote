var express = require('express')
const router = express.Router();
expressValidator = require('express-validator')
var NoteController =require('../controller/note.controller')
var noteController = new NoteController()
router.use(expressValidator())
router.post('/',noteController.addNote)
module.exports=router