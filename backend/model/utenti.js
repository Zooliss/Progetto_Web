const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const strutturautente = new Schema({
    user: String,
    psw: String,
});

module.exports = mongoose.model('utente', strutturautente, 'Utenti');