"use strict";

require('dotenv').config();
const mongoose = require("mongoose");
const Restaurant = require("./../models/Restaurant.model");


const restaurants = [
  {
    name: "Sonora",
    description: "Cheap a** restaurant",
    location: {
      type: "Point",
      coordinates: [41.3975248, 2.1910079]
    }
  },
  {
    name: "Timesburg",
    description: "Best burgers in Poblenou",
    location: {
      type: "Point",
      coordinates: [41.4007419, 2.1987251]
    }
  }
];

mongoose.connect(
  process.env.MONGODB_URI, 
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)
.then( (x) => {
  console.log(`Connected to DB: ${x.connections[0].name}`);
  return x.connection.dropDatabase();
})
.then( () =>  Restaurant.insertMany(restaurants))
.then((createdRestaurants) => {
  console.log("Restaurants Created:", createdRestaurants.length);
  return mongoose.connection.close();
})
.catch( (err) => console.log(err));
