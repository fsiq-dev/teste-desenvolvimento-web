const  Router  = require('express').Router();
const { version } = require('../../package.json')

Router
    .route('/')
    .get((req, res) => {
        res.send(`Desafio PokemonGO Red-fox -Version: ${version}`)
    })


module.exports = Router