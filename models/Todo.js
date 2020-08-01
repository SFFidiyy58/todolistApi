const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//Definisi skema collection todo untuk mongoose
const todoSchema = new Schema({
    kegiatn: {
        type: String,
    },
    status: {
        type: Boolean,
    },
});

const Todo = mongoose.model('Todo', todoSchema, "todos");
module.exports = Todo;