const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const cors = require('cors')
const bodyParser = require('body-parser')

const PORT = '1337'
const URL = 'mongodb+srv://johanbeskow:beskow123@cluster0.igphiur.mongodb.net/?retryWrites=true&w=majority'


MongoClient.connect(URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(client => {

    const drinksDatabase = client.db('drinks')
    const drinksCollection = drinksDatabase.collection('drinks')

    app.use(bodyParser.json())
    app.use(cors())
    app.use(express.static(__dirname + '/public'))

    app.get('/all', async (req, res) => {
        const drinksList = await drinksCollection.find().toArray()
        res.send(drinksList)
    })


    app.post('/add_one', async (req, res) => {
        const newBody = req.body
        await drinksCollection.insertOne(newBody)
        console.log(newBody.name + ' added')
        res.send('New drink added: ' + newBody).status(200)
    })


    const cleanCollection = (collection) => {
        collection.deleteMany({
        })
    }
    app.get('/clean_collection', async (req, res) => {
        try {
            cleanCollection(drinksCollection)
            res.status(200).send('Drinks deleted')
        } catch (err) {
            console.error(err);
            res.status(500).send(err)
        }
    })

    app.get('/populateDrinks', async (req, res) => {
        try {
            const backupList = require('./API/drycker.json')
            backupList.forEach(drink => {
                drinksCollection.insertOne(drink)
            })
            res.status(200).send('Drinks refilled, yum.')
        } catch(err) {
            console.error(err);
            res.status(500).send(err)
        }
    })

    app.put('/updateReview/:id', async (req, res) => {
        const body = req.body
        const filter = {id: req.params.id, "reviews": body}
        const updateReview = {
            $set: {
                reviews: body
            }
        }
        drinksCollection.insertOne(filter, updateReview, { upsert: true} )
    })

    // app.update('/updateReview', async (req, res) => {

    // })

    app.listen(PORT, () => {
        console.log('Server är springer på port: ' + PORT);
    })
})
.catch(error => console.error(error))
