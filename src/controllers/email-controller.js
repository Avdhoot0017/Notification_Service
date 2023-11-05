const { emailService }  = require('../services');

async function create(req,res)
{
    try {

        const responce = await emailService.createTicket({
            subject: req.body.subject,
            content: req.body.content,
            recipientEmail: req.body.recipientEmail

        })

        return res.status(201).json(responce);


        
    } catch (error) {

        return res.status(500).json(error);
        
    }
}

module.exports = {
    create
}