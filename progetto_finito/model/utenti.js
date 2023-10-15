const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const utente = new Schema({
    email: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    psw: {
        type: String,
        required: true
    },
});

const strutturautente = mongoose.model('utente', utente, 'Utenti');
module.exports = strutturautente;

