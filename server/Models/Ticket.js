const mongoose = require('mongoose');

const { TicketSchema } = require('../Schemas/Ticket');

const Ticket = mongoose.model("Ticket", TicketSchema);

module.exports = { Ticket };