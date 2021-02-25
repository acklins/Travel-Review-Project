const express = require('express');
const router = express.Router();
const axios = require('axios')
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn')
// const methodOverride = require('method-override')

// Routes

// GET /destinations - After search, renders a page of vacation destinations to pick from
router.get('/', (req, res) => {
    // Possibly not necessary anymore???
})

// GET /destinations/:id - Render a page with a single destination with info about it
router.get('/:id', isLoggedIn, (req, res) => {
    db.destination.findOne({
        where: {id: req.params.id}
    }).then((destination) => {
        res.render('destinations/singleshow.ejs', {destination: destination})
    })
})

// GET /destinations/:id/reviews - Renders a page of reviews about a destination
router.get('/:id/reviews', isLoggedIn, (req, res) => {
    db.review.findAll({
        where: {
            destinationId: req.params.id
        },
        include: [db.user, db.destination]
    }).then((reviews) => {
        const revArr = []
        reviews.forEach((review) => {
            const revData = {
                destinationName: review.destination.dataValues.city,
                userName: review.user.dataValues.name,
                review: review.content
            }
            revArr.push(revData)
        })
        res.render('reviews/allreviews.ejs', {revData: revArr})
    })
})

// GET /destinations/:id/reviews/new - Renders a form for a new review
router.get('/:id/reviews/new', (req, res) => {
    res.render()
})

// GET /destinations/:id/reviews/:id/edit - Renders review form with relevant info for editing
router.get('/:id/reviews/:id/edit', (req, res) => {
    res.render()
})

// POST /destinations/:id/reviews/new - Posts new review to database and to destination/:id/reviews
router.post('/:id/reviews/new', (req, res) => {
    res.redirect()
})

// POST /destinations/:id - Posts a destination to destination model, adds destination to dashboard, reloads or redirects TBD
router.post('/:id', (req, res) => {
    res.redirect()
})

// PUT /destinations/:id/reviews/:id/edit - Updates review info on page and in database
router.put('/:id/reviews/:id/edit', (req, res) => {
    res.redirect()
})

// DELETE /destinaitons/:id/reviews/:id - Deletes a review from the page and database
router.delete('/:id/reviews/:id', (req, res) => {
    res.redirect()
})


module.exports = router;