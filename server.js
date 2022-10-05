const express = require('express')

const app = express()

app.get('/', function(req, res) {
    res.send('<h1>Digimon TCG App</h1>')
})

app.listen(4000, function() {
    console.log('Listening on port 4000')
})