const express = require("express");
const router = express.Router();
const axios = require("axios");
const db = require("../models");
const isLoggedIn = require("../middleware/isLoggedIn");
const methodOverride = require('method-override')
// Routes

// GET /destinations/:id - Render a page with a single destination with info about it
router.get("/:destid", isLoggedIn, (req, res) => {
  db.destination
    .findOne({
      where: { id: req.params.destid },
    })
    .then((destination) => {
      res.render("destinations/singleshow.ejs", { destination: destination });
    });
});
// GET /destinations/:destid/reviews - Renders a page of reviews about a destination
router.get("/:destid/reviews", isLoggedIn, (req, res) => {
  db.review
    .findAll({
      where: {
        destinationId: req.params.destid,
      },
      include: [db.user, db.destination],
    })
    .then((reviews) => {
      const revArr = [];
      reviews.forEach((review) => {
        const revData = {
          destinationName: review.destination.dataValues.city,
          userName: review.user.dataValues.name,
          review: review.content,
        };
        revArr.push(revData);
      });
      res.render("reviews/allreviews.ejs", { revData: revArr });
    });
});
// GET /destinations/:destid/reviews/new - Renders a form for a new review
router.get("/:id/reviews/new", (req, res) => {
  res.render();
});
// GET /destinations/:destid/reviews/:revid/edit - Renders review form with relevant info for editing
router.get("/:destid/reviews/:revid/edit", (req, res) => {
  db.review
    .findOne({
      where: {
        id: req.params.revid,
      },
      include: [db.user, db.destination],
    })
    .then((review) => {
      res.render("/reviews/editreview.ejs");
    });
});
// POST /destinations/:destid/reviews/new - Posts new review to database
//create a new review to the review model
router.post("/:destid/reviews/new", (req, res) => {
  db.review
    .create({
      userId: req.user._id, //need to confirm or rewrite
      destinationId: req.params.destid,
      content: req.body.content,
    })
    .then((create) => {
      res.redirect("/destid/reviews");
    });
});
// PUT /destinations/:id/reviews/:id/edit - Updates review info on page and in database
router.put("/:destid/reviews/:revid/edit", isLoggedIn, (req, res) => {
  db.review
    .update({ content: req.body }, { where: { id: revid } })
    .then(res.redirect("/destid/reviews"));
});

// DELETE /destinaitons/:id/reviews/:id - Deletes a review from the page and database
router.delete("/:destid/reviews/:revid", (req, res) => {
  db.review
    .destroy({
      where: { id: req.params.revid },
    })
    .then(() => {
      db.review.destroy({ where: { id: req.params.revid } });
    })
    .then(res.redirect("/reviews"))
    .catch((error) => console.log(error));
});
module.exports = router;
