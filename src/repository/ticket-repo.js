const crudRepository = require('./crud-repo');
const { Ticket } = require('../models');






class Ticketrepository extends crudRepository {

    constructor()
    {
        super(Ticket);

    }


   async  getPendingTickets()
    {
        const responce =  await Ticket.findAll({
            where: {
                status: "PENDING"
            }
        })

        return responce;
    }
}

module.exports = Ticketrepository;
