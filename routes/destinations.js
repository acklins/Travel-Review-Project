const express = require('express');
const router = express.Router();
const axios = require('axios')
const db = require("../models")
// const methodOverride = require('method-override')

// Routes

// GET /destinations - After search, renders a page of vacation destinations to pick from
router.get('/', (req, res) => {
    
})

// GET /destinations/:id - Render a page with a single destination with info about it
router.get('/:id', (req, res) => {
    res.render()
})

// POST /destinations/:id - Posts a destination to destination model, adds destination to dashboard, reloads or redirects TBD
router.post('/:id', (req, res) => {
    res.redirect()
})

module.exports = router;