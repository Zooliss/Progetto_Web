const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const strutturautente = require('./model/utenti');
const dbURL = "mongodb+srv://admin:nimda@progetto.oingri0.mongodb.net/?retryWrites=true&w=majority";
const dbPAR ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbURL, dbPAR).then(() =>{
    console.log('Connected to mongodb')   
}).catch((e) => {
    console.error(e)
});

router.post('/registrazione', (req, res) => {
    let datiutente = req.body
    let utente = new strutturautente(datiutente)
    utente.save((e, utenteregistrato) => {
      if (e) {
        console.log(e)      
      } else {
        res.status(200).send(utenteregistrato)
      }
    })
  })

module.exports = router;