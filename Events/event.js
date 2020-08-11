"use strict";
var events = require('events');
var eventEmitter = new events.EventEmitter();
var nodemailer = require("nodemailer");
var dotenv = require('dotenv')
dotenv.config();

/// Create event handler
var sendEmail = async function (subject, user, text) {
  try {
    
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL, // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'manojdevinvent@gmail.com',
    to: user.email,
    subject: subject,
    text: text
  });

  
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  
  } catch (error) {
    console.log('test'+error)
  }
      
}


/// Assign the event handler to an event
eventEmitter.on('sendEmail', sendEmail);

module.exports = eventEmitter;