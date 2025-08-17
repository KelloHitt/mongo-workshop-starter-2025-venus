import mongoose from "mongoose";

/** TODO Your schema here! */

const pokemonSpeciesSchema = new mongoose.Schema({
    dexNumber: Number,
    name: String,
    dexEntry: String,


});