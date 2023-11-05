const {Ticketreopsitory} = require('../repository');

const ticketRepo = new Ticketreopsitory();

const { MAILER } = require('../config')


async function sendEmail(mailfrom,mailto,subject,text)
{

    try {

        const responce = await MAILER.sendMail({
            from: mailfrom,
            to: mailto,
            subject: subject,
            text: text

        })
        return responce;

        
    } catch (error) {

        console.log(errror);
        throw error;
        
    }

}


async function createTicket(data)
{

    try {

        const responce = await ticketRepo.create(data);
        return responce;
        
        
    } catch (error) {

        console.log(errror);
        throw error;
        
    }

}

async function getPendinghEmails()
{

    try {

        const responce = await ticketRepo.getPendingh();
        return responce;
        
        
    } catch (error) {

        console.log(errror);
        throw error;
        
    }

}






module.exports = {
    sendEmail,
    createTicket,
    getPendinghEmails
}
