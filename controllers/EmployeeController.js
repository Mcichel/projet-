const Employee = require('../models/Employee')

const index = (req, res, next) =>{
    Employee.find()
    .then(reponse =>{
        res.json({
            reponse
        })
    })
    .catch(error =>{
        res.json({
            message:'An error Occured!'
        })
    })
}

const show = (req, res, next) =>{
    let employeeID = req.bpdy.name
    Employee.findById (employeeID)
    .then (response=>{
        res.json({
            response

        })
    })
    .catch(error =>{
        res.json({
        message:'An error Occured!'

    })
    })
}

const store = (req, res, next) => {
    let employee =new Employee ({
        name:req.body.name,
        designation: req.body.designation,
        email:req.body.email,
        phone:req.body.phone,
        age:req.body.age

    })
    employee.save()
    .then(response =>{
        res.json({
            message:'Employee Added Successfully!'

        })

    })
    .catch(error =>{
        res.json({
            message: 'An error Ocuured'
        })
    })
}
 const update = (resq,res,next) =>{
     let employeeID = req.body.employeeID

     let updatedData ={
         name: req.body.name,
         designation: req.body.designation,
         email: req.body.email,
         phone: req.body.phone,
         age: req.body.age,
         
     }

     Employee.findByIdAndUpdate(employeeID,{$set: updatedData})
     .then (() =>{
         res.json({
             message: 'Employee update successfully!'

         })
     })
     .catch (error =>{
         res.json({
             message:'An error Occured!'
         })
     })
 }

 const destroy =(req, res,next)=>{
     let employeeID=req.body.employeeID
     Employee.findByIdAndRemove(employeeID)
     .then(()=>{
         req.json({
             message:'Employee deleted succesfully!'
         })
     })
     .catch(error =>{
         req.json({
             messge:'An error Occured!'
         })
     })
    }
    module.exports={
        index, show,store,update,destroy
    }

