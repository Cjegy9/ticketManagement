const mongoose = require('mongoose');

const { UserSchema } = require('../Schemas/User');

const User = mongoose.model("User", UserSchema);

module.exports = { User };
