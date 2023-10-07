const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const strutturautente = require('./model/utenti');
const dbURL = "mongodb+srv://admin:nimda@progetto.oingri0.mongodb.net/Progetto?retryWrites=true&w=majority";
const dbPAR ={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbURL, dbPAR).then(() =>{
    console.log('Connected to mongodb')   
}).catch((e) => {
    console.error(e)
});

router.post('/registrazione', async (req, res) => {
    const nuovoutente = new strutturautente(req.body)
    try{
        await nuovoutente.save()
        res.status(200).json({nuovoutente})
    }catch(e){
        res.status(500).json({error: e.message})
    }
  })

  router.post('/accesso', async (req, res) => {
    const datiutente = req.body;
    try{
        const ricerca = await strutturautente.find({user: datiutente.user});
        /*if (!user) {
            res.status(401).send('Invalid User')
          } else 
          if ( utente.psw !== datiutente.psw) {
            res.status(401).send('Invalid Password')
          } else {
            res.status(200).json({ricerca})
          }*/
          res.status(200).json({ricerca})
    }catch(e){
        res.status(500).json({error: e.message})
    }
  })

module.exports = router;