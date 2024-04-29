const express = require('express');
const router = express.Router();

router.get("/todos", (req, res) => {
    res.status(200).json({ mssg: "GET REQUEST TO /api/todos" });
    });

router.post("/todos", (req, res) => {
    res.status(201).json({ mssg: "POST REQUEST TO /api/todos" });
    });

router.put("/todos/:id", (req, res) => {
    res.status(200).json({ mssg: "PUT REQUEST TO /api/todos/:id" });
    });

router.delete("/todos/:id", (req, res) => {
    res.status(204).json({ mssg: "DELETE REQUEST TO /api/todos/:id" });
    });

module.exports = router;