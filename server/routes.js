const express = require('express');

// make an instance of express router
const router = express.Router();

// GET /todos
router.get("/todos", (req, res) => {
    res.status(200).json({ mssg: "GET request to /api/todos" });
});

// POST /todos
router.post("/todos", (req, res) => {
    res.status(201).json({ mssg: "POST request to /api/todos" });
});

// DELETE /todos
router.delete("/todos/:id", (req, res) => {
    res.status(204).json({ mssg: "DELETE request to /api/todos" });
});

// PUT /todos/:id
router.put("/todos/:id", (req, res) => {
    res.status(200).json({ mssg: "PUT request to /api/todos/:id" });
});

// export the router
module.exports = router;