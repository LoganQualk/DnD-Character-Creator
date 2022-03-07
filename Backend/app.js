const express = require('express');
const request = require('request');
const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors())

// '/spellFind' is the localhost:8000/spell
app.get('/spell', (req, res) => {
    let name = req.query.name; // how you get attributes from the URL -- localhost:8000/spell?name=EXAMPLE
    request("https://api.open5e.com/spells/?limit=1&name=" + name, (error, response, body) => {
        res.send(body);
    })
});

app.get('/race', (req, res) => {
    let name = req.query.name;
    request("https://api.open5e.com/races/?limit=1&name=" + name, (error, response, body) => {
        res.send(body);
    })
})

app.get('/item', (req, res) => {
    let name = req.query.name;
    request("https://api.open5e.com/magicitems/?limit=1&name=" + name, (error, response, body) => {
        res.send(body);
    })
})

// app.get('/itemFind', (req, res) => {
//     // let name = req.query.name;
//     let items = []
//     for (let page = 1; page <= 5; page++) {
//         request("https://api.open5e.com/magicitems/?page=" + page, (error, response, body) => {
//             items = [...items, ...(JSON.parse(body).results.map(item => item.name))];
//         })
//     }

//     setTimeout(() => {
//         res.json(items.sort());
//     }, 10000)
// });

app.listen(port, () => console.log(`Listening on port ${port}!`))