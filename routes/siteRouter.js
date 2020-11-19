"use strict";
const express = require("express");
const router = express.Router();

const Restaurants = require("../models/Restaurant.model");

// GET      /     - Renders the home page with the restaurants map
router.get("/", (req, res, next) => {
  Restaurants.find()
    .then((restaurants) => {
      // console.log(restaurants[0].location.coordinates[0]);
      const props = { restaurants }
      res.render("Home", props );
    })
    .catch(next);
});

module.exports = router;
