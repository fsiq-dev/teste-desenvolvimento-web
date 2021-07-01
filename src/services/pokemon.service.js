const Pokemon = require('../models/pokemonGo.model');

const addNewPokemonOnPokedex = async (model, file) => {
    console.log(model)
    const newPokemon = await Pokemon.create({
        name: model.name,
        pokedexNumber: model.pokedexNumber,
        image: {
            name: file.originalname,
            size: file.size,
            key: file.filename,
            url: file.location,
        },
        generation: model.generation,
        evolutionStage: model.evolutionStage,
        familyID: model.familyID,
        crossGen: model.crossGen,
        type1: model.type1,
        type2: model.type2,
        Weather1: model.Weather1,
        Weather2: model.Weather2,
        statTotal: model.statTotal,
        atk: model.atk,
        def: model.def,
        sta: model.sta,
        legendary: model.legendary,
        aquireable: model.aquireable,
        spawns: model.spawns,
        regional: model.regional,
        raidable: model.raidable,
        hatchable: model.hatchable,
        shiny: model.shiny,
        nest: model.nest,
        new: model.new,
        notGettable: model.notGettable,
        futureEvolve: model.futureEvolve,
        cpMaximo: model.cpMaximo,
        hpMaximo: model.hpMaximo
    })

    return {
        sucsses: true,
        message: 'Operação realizada com sucesso',
        data: newPokemon
    }
}

const getAllPokemon = async () => {
    const pokemonDB = await Pokemon.find({})
    return pokemonDB.map(pokemonDB => {
        return pokemonDB
    })
}

module.exports = {
    addNewPokemonOnPokedex,
    getAllPokemon,
}