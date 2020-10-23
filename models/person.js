const mongoose = require("../db/connection");

const Schema = mongoose.Schema;

const personSchema = new Schema(
    {
        name: String
        tasks: [{ref:"Sticky", type: Schema.Type.ObjectId}]
    }
)

const Person = mongoose.model('Person', personSchema)

module.exports = Person

