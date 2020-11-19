"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const erv = require("express-react-views");
const siteRouter = require("./routes/siteRouter");
const apiRouter = require("./routes/apiRouter");

const app = express();

// MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// VIEW ENGINE SETUP
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", erv.createEngine());

// MIDDLEWARE
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
app.use("/", siteRouter);
app.use("/api", apiRouter);


module.exports = app;