const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mongoose = require('mongoose');
const strutturautente = require('./model/utenti');
const dbURL = "mongodb+srv://admin:nimda@progetto.oingri0.mongodb.net/Progetto?retryWrites=true&w=majority";
const dbPAR = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
var Identificativo = "";

mongoose.connect(dbURL, dbPAR).then(() => {
  console.log('Connected to mongodb')
}).catch((e) => {
  console.error(e)
});

function verificatoken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send('Richiesta non autorizzata')
  }
  let token = req.headers.authorization.split(' ')[1]
  if (token === 'null') {
    return res.status(401).send('Richiesta non autorizzata')
  }
  let payload = jwt.verify(token, 'JWT_SECRET')
  if (!payload) {
    return res.status(401).send('Richiesta non autorizzata')
  }
  req.userId = payload.subject
  next()
}

router.post('/registrazione', async (req, res) => {
  const nuovoutente = new strutturautente(req.body)
  try {
    const ricerca = await strutturautente.find({ user: nuovoutente.user });
    if (ricerca.length == 0) {
      Identificativo = nuovoutente.user;
      await nuovoutente.save()
      let payload = { subject: nuovoutente._id }
      let token = jwt.sign(payload, 'JWT_SECRET')
      res.status(200).json({ token })
    } else {
      res.status(401).send('Nome Utente usato')
    }
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.post('/accesso', async (req, res) => {
  const datiutente = req.body;
  try {
    const ricerca = await strutturautente.find({ user: datiutente.user, psw: datiutente.psw });
    if (ricerca.length == 0) {
      res.status(401).send('User o Password non corretti')
    } else {
      Identificativo = datiutente.user;
      let payload = { subject: ricerca._id }
      let token = jwt.sign(payload, 'JWT_SECRET')
      res.status(200).json({ token })
    }

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.get('/profilo', verificatoken, async (req, res) => {
  try {
    const ricerca = await strutturautente.find({ user: Identificativo });
    res.json(ricerca)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.delete('/profilo/elimina', verificatoken, async (req, res) => {
  try {
    const ricerca = await strutturautente.deleteOne({ user: Identificativo });
    res.json(ricerca)
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.put('/profilo/modifica', verificatoken, async (req, res) => {
  try {
    if (req.body.email != "" && req.body.psw != "") {
      const ricerca = await strutturautente.updateOne({ user: Identificativo }, { $set: req.body });
      res.status(200).json(ricerca)
    } else {
      if (req.body.email != "" && req.body.psw == "") {
        const ricerca2 = await strutturautente.updateOne({ user: Identificativo }, { email: req.body.email });
        res.status(200).json(ricerca2)
      }else{
        if (req.body.email == "" && req.body.psw != "") {
          const ricerca3 = await strutturautente.updateOne({ user: Identificativo }, { psw: req.body.psw });
          res.status(200).json(ricerca3)
        }else{
          res.status(200).send('Entrambi i parametri sono vuoti, nessuna modifica da apportare')
        }
      }
    }

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

router.get('/prodotti', (req, res) => {
  let prodotti = [
    {
      "_id": "1",
      "nome": "Mouse",
      "marca": "Razer",
      "disponibilita": "Disponibile",
      "sconto": "0"
    },
    {
      "_id": "2",
      "nome": "Tastiere",
      "marca": "Trust",
      "disponibilita": "Non Disponibile",
      "sconto": "0"
    },
    {
      "_id": "3",
      "nome": "Cuffie",
      "marca": "JBL",
      "disponibilita": "Disponibile",
      "sconto": "0"
    },
    {
      "_id": "4",
      "nome": "Monitor",
      "marca": "Samsung",
      "disponibilita": "Disponibile",
      "sconto": "0"
    },
    {
      "_id": "5",
      "nome": "Pc fisso",
      "marca": "DELL",
      "disponibilita": "Non Disponibile",
      "sconto": "0"
    },
    {
      "_id": "6",
      "nome": "Laptop",
      "marca": "Asus",
      "disponibilita": "Disponibile",
      "sconto": "0"
    }
  ]
  res.json(prodotti)
})

router.get('/offerte', verificatoken, (req, res) => {
  let offerte = [
    {
      "_id": "1",
      "nome": "Tastiera",
      "marca": "Logitech",
      "disponibilita": "Disponibile",
      "sconto": "20"
    },
    {
      "_id": "2",
      "nome": "Monitor",
      "marca": "LG",
      "disponibilita": "Disponibile",
      "sconto": "50"
    },
    {
      "_id": "3",
      "nome": "Laptop",
      "marca": "Alienware",
      "disponibilita": "Disponibile",
      "sconto": "5"
    },
    {
      "_id": "4",
      "nome": "Mouse",
      "marca": "Logitech",
      "disponibilita": "Disponibile",
      "sconto": "20"
    },
    {
      "_id": "5",
      "nome": "Cuffiette",
      "marca": "Samsung",
      "disponibilita": "Disponibile",
      "sconto": "15"
    },
    {
      "_id": "6",
      "nome": "HD esterno",
      "marca": "Samsung",
      "disponibilita": "Disponibile",
      "sconto": "15"
    }
  ]
  res.json(offerte)
})

module.exports = router;