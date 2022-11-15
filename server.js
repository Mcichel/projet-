const express    = require('express')
const mongoose   =require('mongoose')
const morgan     = require('morgan')
const bodyParser = require('body-parser')

const EmployeeRoute = require('./route/employee')
const AuthRoute=require('./route/auth')

mongoose.connect('mongodb://0.0.0.0:27017/testdb', {useNewUrlParser: true,useUnifiedTopology: true})
const db=mongoose.connection

db.on('error', (err) =>{
    console.log(err)
})

db.once ('open',()=>{
    console.log('Database Connection Established!')
})

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

app.use('/api/users', EmployeeRoute)
app.use('/api', AuthRoute)
