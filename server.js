const express = require('express')
const axios = require('axios')

const app = express()


app.get('/st1', async (req, res) => {
    // Tells axios to go to this url
    // axios.get(`http://www.imdb-api.com/en/API/Title/${process.env.imdbKEY}/${req.params.imdbId}`)
    // axios.get(`https://digimoncard.io/api-public/search.php?n=Agumon&desc=Reveal 5 cards&color=red&type=digimon&attribute=Vaccine&card=BT1-010&pack=BT01-03: Release Special Booster Ver.1.0&sort=name&sortdirection=desc&series=Digimon Card Game`)
    axios.get(`https://digimoncard.io/api-public/search.php?pack=ST-1: Starter Deck Gaia Red`)
        .then(function (response) {
            let context = {
                cardData: response.data
            }
            res.send(context)
            // res.render('result.ejs', context);
        })
})

app.get('/st2', async (req, res) => {
    // Tells axios to go to this url
    // axios.get(`http://www.imdb-api.com/en/API/Title/${process.env.imdbKEY}/${req.params.imdbId}`)
    // axios.get(`https://digimoncard.io/api-public/search.php?n=Agumon&desc=Reveal 5 cards&color=red&type=digimon&attribute=Vaccine&card=BT1-010&pack=BT01-03: Release Special Booster Ver.1.0&sort=name&sortdirection=desc&series=Digimon Card Game`)
    axios.get(`https://digimoncard.io/api-public/search.php?pack=ST-2: Starter Deck Cocytus Blue`)
        .then(function (response) {
            let context = {
                cardData: response.data
            }
            res.send(context)
            // res.render('result.ejs', context);
        })
})

app.get('/st3', async (req, res) => {
    // Tells axios to go to this url
    // axios.get(`http://www.imdb-api.com/en/API/Title/${process.env.imdbKEY}/${req.params.imdbId}`)
    // axios.get(`https://digimoncard.io/api-public/search.php?n=Agumon&desc=Reveal 5 cards&color=red&type=digimon&attribute=Vaccine&card=BT1-010&pack=BT01-03: Release Special Booster Ver.1.0&sort=name&sortdirection=desc&series=Digimon Card Game`)
    axios.get(`https://digimoncard.io/api-public/search.php?pack=ST-3: Starter Deck Heaven's Yellow`)
        .then(function (response) {
            let context = {
                cardData: response.data
            }
            res.send(context)
            // res.render('result.ejs', context);
        })
})

app.get('/', function(req, res) {
    res.send('<h1>Digimon TCG App</h1>')
})

app.listen(4000, function() {
    console.log('Listening on port 4000')
})