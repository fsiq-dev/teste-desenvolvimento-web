const { addNewPokemonOnPokedex, getAllPokemon } = require('../services/pokemon.service')

const createNewPokemon = async (req, res, next) => {
    const { body, file } = req
    const resultService = await addNewPokemonOnPokedex(body, file)
    const resultSucsses = resultService.sucsses ? 200 : 400;
    const resultData = resultService.sucsses ? {data: resultService.data} : {datails: resultService.details}

    return res.status(resultSucsses).send(resultData)
}

const listAllPokemon = async (req, res, next) => {
    const result = await getAllPokemon()
    res.status(200).send({ data: result })
}


module.exports = {
    createNewPokemon,
    listAllPokemon
}