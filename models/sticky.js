const mongoose = require("../db/connection")

const Schema = mongoose.Schema

const stickySchema = new Schema(
    {
        task: {type: String, required: true},
        completeBy: String,
        workSpace: String,
        description: String,
        done: {type: Boolean, default: false},
        assignTo: {ref:"Person", type: Schema.Type.ObjectId}
    }
)

const Sticky = mongoose.model("Sticky", stickySchema)

module.exports = Sticky