const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  finished: Boolean,
});

module.exports = { TicketSchema };