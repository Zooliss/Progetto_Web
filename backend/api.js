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
        const ricerca = await strutturautente.find({user: datiutente.user, psw: datiutente.psw});
        if(ricerca.length == 0){
            res.status(401).send('User o Password non corretti')
        }else{
            res.status(200).json({ricerca})
        }
        
    }catch(e){
        res.status(500).json({error: e.message})
    }
  })

  router.get('/prodotti', (req,res) => {
    let prodotti = [
      {
        "_id": "1",
        "nome": "Mouse",
        "marca": "Razer",
        "disponibilita": "1"
      },
      {
        "_id": "2",
        "nome": "Tastiere",
        "marca": "Trust",
        "disponibilita": "0"
      },
      {
        "_id": "3",
        "nome": "Cuffie",
        "marca": "JBL",
        "disponibilita": "1"
      },
      {
        "_id": "4",
        "nome": "Monitor",
        "marca": "Samsung",
        "disponibilita": "1"
      },
      {
        "_id": "5",
        "nome": "Pc fisso",
        "marca": "DELL",
        "disponibilita": "0"
      },
      {
        "_id": "6",
        "nome": "Laptop",
        "marca": "Asus",
        "disponibilita": "1"
      }
    ]
    res.json(prodotti)
  })

  router.get('/offerte', (req, res) => {
    let offerte = [
      {
        "_id": "1",
        "nome": "Tastiera e Mouse",
        "marca": "logitech",
        "disponibilita": "1",
        "sconto": "20"
      },
      {
        "_id": "2",
        "nome": "Monitor",
        "marca": "LG",
        "disponibilita": "1",
        "sconto": "50"
      },
      {
        "_id": "3",
        "nome": "Tappetino Mouse",
        "marca": "Amazon Basic",
        "disponibilita": "1",
        "sconto": "5"
      }
    ]
    res.json(offerte)
  })

module.exports = router;