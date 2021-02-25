const express = require('express');
const router = express.Router();
const db = require("../models")

// Routes

// GET /destinations/:id/reviews - Renders a page of reviews about a destination
router.get('')

//PUT /destinations/:id/reviews
router.put('/:id/reviews/:id/edit', (req, res) =>{
    res.redirect("/:id/reviews")
})
router.delete("/:id/reviews/:id", (req, res) => {
    res.redirect("/:id/reviews")
})


module.exports = router;