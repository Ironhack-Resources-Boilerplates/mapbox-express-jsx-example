'use strict';
const express = require('express');
const router = express.Router();

const Restaurants = require('../models/Restaurant.model');

// GET  /api/restaurants     -  Get restaurants listings.
router.get('/restaurants', (req, res, next) => {
  Restaurants.find()
    .then(restaurants => {
      res.json(restaurants)
    })
    .catch((err) => console.log(err));
});

module.exports = router;
