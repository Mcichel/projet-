/*Importation des dependances necessaires */

const express = require('express')
const mongoose = require('mongoose')
const bodyParser =require('body-parser')
const morgan = require('morgan')

/*route d'authentification */


const AuthRoute =require('./routes/auth')

/*connexion BD */


mongoose.connect('mongodb://0.0.0.0:27017/testdb', {useNewUrlParser: true,useUnifiedTopology: true})
const db=mongoose.connection

db.on('error', (err) =>{
    console.log(err)
})

db.once ('open',()=>{
    console.log('Connexion établie!')
})

/*Création d'une instance d'express en tant que app */

const app = express()

/*Configuration des middlwares */

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

  
  /* Démarrage du serveur*/

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Le Serveur fonctionne sur le port ${PORT}`)
})

/*definition de la route d'authentification */

app.use('/api', AuthRoute)

/* En résumé, ce code configure un serveur Express avec une connexion à une base de données MongoDB, des middlewares pour la gestion des requêtes et des routes d'authentification pour l'inscription et la connexion des utilisateurs.*/




