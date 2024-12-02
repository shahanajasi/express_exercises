const express = require("express");
const { gettingIDwise } = require("./controllers/idcontroller");
const { gettingQuerywise } = require("./controllers/querycontroller");
const nrouter = express.Router();
nrouter.get("/",gettingQuerywise)
nrouter.get("/:id",gettingIDwise)

module.exports = { nrouter };

