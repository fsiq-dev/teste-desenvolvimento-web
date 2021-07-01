const { createNewPokemon, listAllPokemon} = require('../../controllers/pokemon.controller');
const multer = require('multer');
const multerConfig = require('../../config/multer')

module.exports = (Router) => {
    Router
        .route('/pokemon')
        .get(listAllPokemon)
    Router
        .route('/pokemon/register')
        .post(
            multer(multerConfig).single('file'),
            createNewPokemon
        )
    Router
        .route('/pokemon/:id')
        .get((req, res) => {
            res.send('rota get por id')
        })
}