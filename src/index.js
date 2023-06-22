const express = require('express')
const app = express()
const { default : mongoose } = require('mongoose')
const route = require('./routes/route')
const multer=require('multer')
const cors = require('cors')

app.use(express.json())
app.use(multer().any())
app.use(cors())

mongoose.connect('mongodb+srv://kfarzan13:Farzankh13@demodb.dclp2mx.mongodb.net/group2Database?retryWrites=true&w=majority', { useNewUrlParser: true })
.then( () => console.log("MongoDb is connected"))
.catch( (error) => console.log(error.message))

app.use('/',route)

app.use(function (req, res) {
    res.status(404).send({ status: false, msg: "Url not found !!!" })
})

app.listen( 5000 , function(){
    console.log("Express app is running on port " + (process.env.PORT || 5000))
})


