const mongoose = require("mongoose");

const LogInSchema = new mongoose.Schema({
    name: String,
    password: String
});

const LogInCollection = mongoose.model("LogIn", LogInSchema);

module.exports = LogInCollection;
