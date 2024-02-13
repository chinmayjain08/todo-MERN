const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://developerchinmay08:NE4PXHoxN01w9chW@cluster0.rh71mth.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
})

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}