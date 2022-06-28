const express = require('express')
const request = require('request');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')


const URL = 'mongodb+srv://johanbeskow:beskow123@cluster0.igphiur.mongodb.net/?retryWrites=true&w=majority'
const API_URL = "https://api-extern.systembolaget.se/site/V2/Agent"
const API_KEY = "2ab2f97edf2f4dbbaf833b2b3ebf2bb1"




app.use(express())
app.use(cors())
app.use(bodyParser.json())



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/drycker', (req, res) => {
    request(
        {
            url: API_URL,
            headers: {
                "Ocp-Apim-Subscription-Key": API_KEY
            }

        },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: error });
            }

            res.json(JSON.parse(body));


        }
    )
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));


// MongoClient.connect(URL,
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }
// ).then(client => {

//     app.use(express())
//     app.use(cors())

//     console.log('Server är springer');
// })

