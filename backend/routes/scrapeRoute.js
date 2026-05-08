const express = require("express")
const router = express.Router()
const scrapeController = require("../controller/scrapeController")
router.post("/createScrape",scrapeController.createScrape)
module.exports = router