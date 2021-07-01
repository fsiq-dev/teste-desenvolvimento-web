const { addNewPokemonOnPokedex, getAllPokemon, getPokemonById } = require('../services/pokemon.service')

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

const listPokemonById = async (req, res, next) => {
    const { id } = req.params
    const result = await getPokemonById(id)
    if(!result) {
        return res.status(404).send({
            details: [
                "pokemon informado não existe"
            ]
        })
    }
    return res.status(200).send(result)
}


module.exports = {
    createNewPokemon,
    listAllPokemon,
    listPokemonById
}