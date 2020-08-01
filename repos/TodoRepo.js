const Todo = require('../models/Todo');
class TodoRepository {
    constructor(model){
        this.model = model;
    }

    //membuat data kegiatan baru
    create(kegiatan){
        console.log(kegiatan)
        const newTodo = { kegiatan: kegiatan, status: false };
        const todo = new this.model(newTodo);
        return todo.save();
    }

    //menampilkan seluruh kegiatan
    findAll(){
        return this.model.find();
    }

    //mencari salah satu kegiatan berdasarkan id
    findById(id){
        return this.model.findById(id);
    }

    //menghapus salah satu kegiatan berdasarkan id
    deleteById(id){
        return this.model.findByIdAndDelete(id);
    }

    //merubah status kegiatan dengan id tertentu
    updateById(id, object){
        const query = {_id: id };
        return this.model.findOneAndUpdate(query, {$set: {status: object.status }});
    }
}

module.exports = new TodoRepository(Todo);