const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.port ?? 8000;

app.use(cors())
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api/offers', (req, res) => {
    const { limit } = req.query
    fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, json) => {
            if (Object.keys(req.query).length === 0 ) {
                res.json(JSON.parse(json));
            } else {
                res.json(JSON.parse(json).slice(0, limit));
            }
    });
});

app.get('/api/offers/offer/:id', (req, res) => {
    const offerId = req.url.split('/').reverse()[0];
    fs.readFile(path.join(__dirname, 'data', 'data.json'), (err, json) => {
        res.json(JSON.parse(json)[offerId]);
    });
});

app.listen(PORT, () => {
    console.log(`The server has been started on PORT ${PORT}`)
})