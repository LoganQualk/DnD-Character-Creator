const express = require('express');
const request = require('request');
const cors = require('cors')
const app = express();
const port = 8000;

app.use(cors())

app.get('/monsterLookup', (req, res) => {
    let name = req.query.name;
    request("https://api.open5e.com/monsters/?name=" + name, (error, response, body) => {
        res.send(body);
    })
});

app.get('/spellFind', (req, res) => {
    // let name = req.query.name;
    let spells = []
    for (let page = 1; page <= 7; page++) {
        request("https://api.open5e.com/spells/?page=" + page, (error, response, body) => {
            spells = [...spells, ...(JSON.parse(body).results.map(spell => spell.name))];
        })
    }

    setTimeout(() => {
        res.json(spells.sort());
    }, 10000)
});

app.listen(port, () => console.log(`Listening on port ${port}!`))