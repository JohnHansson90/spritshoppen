const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient

const port = '1337'
const URL = 'mongodb+srv://johanbeskow:beskow123@cluster0.igphiur.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(URL, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    }
).then(client => {
    console.log('Server är springer');
})