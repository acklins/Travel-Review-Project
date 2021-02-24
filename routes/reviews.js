const express = require('express');
const router = express.Router();
const db = require("../models")

// Routes

// GET /destinations/:id/reviews - Renders a page of reviews about a destination
router.get('/', (req, res) => {
    res.render()
})

// GET /destinations/:id/reviews/new - Renders a form for a new review
router.get('/new', (req, res) => {
    res.render()
})

// GET /destinations/:id/reviews/:id/edit - Renders review form with relevant info for editing
router.get('/:id/new', (req, res) => {
    res.render()
})

// POST /destinations/:id/reviews/new - Posts new review to database and to destination/:id/reviews
router.post('/new', (req, res) => {
    res.redirect()
})

// PUT /destinations/:id/reviews/:id/edit - Updates review info on page and in database
router.put('/:id/edit', (req, res) => {
    res.redirect()
})

// DELETE /destinaitons/:id/reviews/:id - Deletes a review from the page and database
router.delete('/:id', (req, res) => {
    res.redirect()
})

module.exports = router;