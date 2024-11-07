const { json } = require('express')
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/SyncSpace").then(() => console.log("Mongodb Connected")).catch((error) => console.log(error.message))

app.listen(5000, () => console.log("Connected To Server..."))
