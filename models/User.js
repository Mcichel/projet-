/*importation des dependances */

const { hash } = require('bcrypt')
const mongoose =require('mongoose')
const Schema =mongoose.Schema


/*Schema de l'utilisateur */

const userSchema  =new Schema ({
    email:{
        type: String
    },
    password:{
        type :String
    }
},{timestamps: true})

/*création du modele Utilisateur */
const User=mongoose.model('User', userSchema)

/*exportation du modèle */
module.exports= User


/*En résumé, ce code définit un modèle de données pour un utilisateur avec des champs d'e-mail et de mot de passe, utilisant Mongoose pour interagir avec MongoDB. */
