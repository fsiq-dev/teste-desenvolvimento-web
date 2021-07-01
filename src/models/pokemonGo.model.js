const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
    name: String,
    pokedexNumber: Number,
    image: {
        name: String,
        size: Number,
        key: String,
        url: String,
    },
    generation: Number,
    evolutionStage: Number,
    evolved: Number,
    familyID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'pokemon'
    },
    crossGen: Number,
    type1: String,
    type2: String,
    Weather1: String,
    Weather2: String,
    statTotal: Number,
    atk: Number,
    def: Number,
    sta: Number,
    legendary: Number,
    aquireable: Number,
    spawns: Number,
    regional: Number,
    raidable: Number,
    hatchable: Number,
    shiny: Number,
    nest: Number,
    new: Number,
    notGettable: Number,
    futureEvolve: Number,
    cpMaximo: Number,
    hpMaximo: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('pokemon', PokemonSchema)