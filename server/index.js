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
    // app.use(express.static(__dirname + '/../public'))

    const cleanCollection = async (collection) => {
        await collection.deleteMany({
        })
    }


    app.get('/cleanCollection', (req, res) => {
        try {
            cleanCollection(drinksCollection);
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

    app.get('/all/:prodType', async (req, res) => {
        const allProdType = await drinksCollection.find({prodType: req.params.prodType}).toArray()
        res.send(allProdType)
    })

    app.get('/beer', async (req, res) => {
        const beerList = await drinksCollection.find({prodType: 'öl'}).toArray()
        res.send(beerList)
    })

    app.get('/spirits', async (req, res) => {
        const spirits = await drinksCollection.find({prodType: 'spirits'}).toArray()
        res.send(spirits)
    })

    app.get('/wine', async (req, res) => {
        const wines = await drinksCollection.find({prodType: 'vin'}).toArray()
        res.send(wines)
    })

    app.get('/all', async (req, res) => {
        const drinksList = await drinksCollection.find().toArray()
        res.send(drinksList)
    })

    app.get('/get_one/:id', async (req, res) => {
        const oneDrink = await drinksCollection.find({art: Number(req.params.id)}).toArray()
        res.send(oneDrink)
    })

    app.get('/top_picks', async (req,res) => {
        const topRated = await drinksCollection.find().sort({ 'reviews.rating': -1}).limit(6).toArray()
        res.send(topRated)
    })

    app.get('/:country/:type', async (req, res) => {
        const filteredList = await drinksCollection.find({country: req.params.country, prodType: req.params.type}).toArray()
        res.send(filteredList)
    })

    app.get('/:country', async (req, res) => {
        const filteredList = await drinksCollection.find({country: req.params.country}).toArray()
        res.send(filteredList)
    })

    app.post('/add_one', async (req, res) => {
        const newBody = req.body
        await drinksCollection.insertOne(newBody)
        console.log(newBody.name + ' added')
        res.send('New drink added: ' + newBody).status(200)
    })

    app.put('/updateReview/:id', async (req, res) => {
        const date = new Date()
        const newDate = date.toLocaleString('sv-SE')
        const body = {
            "user": req.body.user,
            "comment": req.body.comment,
            "rating": Number(req.body.rating),
            "created": newDate
        }
        drinksCollection.updateOne({art : Number(req.params.id)}, { $push: { reviews: body } })
        console.log('Updated reviews on art: ' + req.params.id + ' with "' + body.comment + '"');
        res.sendStatus(200)

    })

    app.listen(PORT, () => {
        console.log('Server är springer på port: ' + PORT);
    })
})
.catch(error => console.error(error))
