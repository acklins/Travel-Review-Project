const express = require('express');
const router = express.Router();
const axios = require('axios')
const db = require("../models")

// Routes

// GET /destinations - After search, renders a page of vacation destinations to pick from
router.get('/', (req, res) => {
    // let place = req.query
    let apiUrl = 'https://api.teleport.org/api/cities/?search=rome'
    axios.get(apiUrl)
    .then((responseData) => {
        let data = responseData.data._embedded['city:search-results'][0]
        let geoid = data._links['city:item'].href
        axios.get(geoid)
        .then((responseData) => {
            let specData = responseData.data
            console.log(specData)
            res.render('destinations/search.ejs', {specData: specData})
        })
    })
    // res.send('Found Data')
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