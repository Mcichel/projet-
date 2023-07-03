/*importation des dependances */

const express = require('express')
const router  =express.Router()

/*importation du controlleur */
const AuthController =require('../controllers/AuthController')

/*definition des routes*/

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/users', AuthController.getUsers)

/*exportation du routeur */
module.exports =router

/* En résumé, ce code configure les routes pour les opérations d'inscription, de connexion et de récupération des utilisateurs dans une application Node.js avec Express. Chaque route est associée à une fonction spécifique du contrôleur AuthController, qui est responsable de la logique métier correspondante. L'utilisation d'un routeur facilite la gestion des routes et permet de regrouper les fonctionnalités liées à l'authentification dans un fichier distinct pour une meilleure organisation du code.*/