const express = require('express');
const router = express.Router();
const { Todo } = require('./models');

router.get("/todos", async (req, res) => {
    try{
        const todos = await Todo.find({});
        res.status(200).json(todos);
    }catch(err){
        res.status(500).send(err);
    }
});

router.post("/todos", async (req, res) => {
    const { todo} = req.body;
    try{
        const newTodo = new Todo({
            todo,
            status:false,
        });
        await newTodo.save();
        res.status(201).json(newTodo);
    }catch(err){
        res.status(400).send(err);
    }
    });

router.put("/todos/:id",  async (req, res) => {
    const { todo, status } = req.body;
    try{
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo, status }, { new: true });
        if(!updatedTodo){
            res.status(404).json({ mssg: "Todo not found" });
        }
        res.status(200).json(updatedTodo);
    }catch(err){
        res.status(400).send(err);
    }
    });

router.delete("/todos/:id", async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo){
            res.status(404).json({ mssg: "Todo not found" });
        }
        res.status(200).json(deletedTodo);
    }catch(err){
        res.status(400).send(err);
    }

});

module.exports = router;