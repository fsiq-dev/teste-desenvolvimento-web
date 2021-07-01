const  Router  = require('express').Router();
const { version } = require('../../package.json')

const PokemonRouteV1 = require('./v1/pokemon'); 

Router
    .route('/')
    .get((req, res) => {
        res.send(`Desafio PokemonGO Red-fox -Version: ${version}`)
    })

PokemonRouteV1(Router); 

module.exports = Router