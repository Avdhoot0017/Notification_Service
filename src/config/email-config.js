const nodemailer = require("nodemailer");

const { GMAIL,PASSWORD} = require('./server_config');

const mailsender = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: GMAIL,
        pass: PASSWORD
    }
}) 

module.exports = mailsender;
