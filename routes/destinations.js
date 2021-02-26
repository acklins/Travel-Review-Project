const express = require('express');
const router = express.Router();
const axios = require('axios')
const db = require("../models")
const isLoggedIn = require('../middleware/isLoggedIn')
const methodOverride = require('method-override')

// Routes

// GET /destinations/:destid - Render a page with a single destination with info about it
router.get('/:destid', isLoggedIn, (req, res) => {
    db.destination.findOne({
        where: {id: req.params.destid}
    }).then((destination) => {
        res.render('destinations/singleshow.ejs', {destination: destination})
    })
})

// GET /destinations/:destid/reviews - Renders a page of reviews about a destination
router.get('/:destid/reviews', isLoggedIn, (req, res) => {
    db.review.findAll({
        where: {
            destinationId: req.params.destid
        },
        include: [db.user, db.destination]
    }).then((reviews) => {
        const revArr = []
        reviews.forEach((review) => {
            const revData = {
                destinationName: review.destination.dataValues.city,
                destinationId: review.destination.dataValues.id,
                userName: review.user.dataValues.name,
                reviewText: review.content,
                reviewId: review.id
            }
            revArr.push(revData)
            console.log(revData)
        })
        res.render('reviews/allreviews.ejs', {revData: revArr})
    })
})

// GET /destinations/:destid/reviews/new - Renders a form for a new review
router.get('/:destid/reviews/new', isLoggedIn, (req, res) => {
    // console.log(req.params.destid)
    db.destination.findOne({
        where: {id: req.params.destid}
    }).then((destination) => {
        // console.log(destination)
        res.render('reviews/newreview.ejs', {destination: destination})
    })
})

// GET /destinations/:destid/reviews/:revid/edit - Renders review form with relevant info for editing
router.get('/:destid/reviews/:revid/edit', (req, res) => {
    res.render('reviews/editreview.ejs')
})

// POST /destinations/:destid/reviews/new - Posts new review to database and to destination/:id/reviews
router.post('/:destid/reviews/new', (req, res) => {
    res.redirect('/:destid/reviews')
})

// PUT /destinations/:destid/reviews/:revid/edit - Updates review info on page and in database
router.put('/:destid/reviews/:revid/edit', isLoggedIn, (req, res) => {
    db.review.update({content:req.body},
        {where:{id:revid }}
    ).then(res.redirect('/:destid/reviews'))
})

// DELETE /destinaitons/:destid/reviews/:revid - Deletes a review from the page and database
router.delete('/:destid/reviews/:revid', isLoggedIn, (req, res) => {
    db.review.destroy({
        where: {id: req.params.revid}
    }).then( 
    res.redirect('/:destid/reviews') )
})


module.exports = router;