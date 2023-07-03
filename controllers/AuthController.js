/*exportation des dependances */

const User =require('../models/User')
const bcrypt =require('bcryptjs')
const jwt =require('jsonwebtoken')

/*fonction register pour l'enregistrement */

const register = (req,res,next) => {
    bcrypt.hash(req.body.password, 10,function(err,hashPass){
        if(err){
            res.json({
            error: err
            })
        }
    
        let user=new User({
            email:req.body.email,
            password: hashPass
        })
        user.save()
        .then(user=>{
        res.json({
            message:'Utilisateur ajouter avec succès'
            })
        })
        .catch(error=>{
            re.json({
            message:'error'
            })
        })
    })
}

/*Fonction login pour la connexion */

const login =(req, res, next)=>{
    var username= req.body.username
    var password= req.body.password

    User.findOne({$or:[{email:username},{phone:username}]})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password, function(err,result){
                if (err){
                    res.json({
                        error:err
                    })
                }
                if(result){
                    let token =jwt.sign({name:user.name},'verySecretValue',{expiresIn:'1h'})
                    res.json({
                        message:'connecté avec succès',
                        token
                    })
                }else  {
                    res.json({
                        message:'le mot de passe ne correspond pas'
                    })
                } 
            })

        }else{
            res.json({
               message:'Utilisateur introuvable!' 
            })
        }
    })
        
} 
/*Récuperation des utilisateurs  */

const getUsers = async (req, res) => {
    try {
      // Récupérer tous les utilisateurs dans la base de données
      const users = await User.find({}, '-password');
      res.json(users);
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      res.status(500).json({ message: 'Erreur lors de la récupération des utilisateurs' });
    }
  };
  

/*exportation des fonctions */
module.exports={
    register,login,getUsers}

    /* En résumé, ce code gère l'inscription, l'authentification et la récupération des utilisateurs dans une application Node.js avec Express et Mongoose, en utilisant des fonctions pour chaque action et en interagissant avec la base de données MongoDB.*/