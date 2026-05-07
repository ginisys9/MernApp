const express = require("express")
const router = express.Router()
const storyController = require("../controller/storyController")
const auth = require("../middleware/auth")
router.get("/getAll",storyController.getAllStory)
router.get("/:id",storyController.getSingleStory)
router.post("/:id/bookmark",auth,storyController.toggleBookmark)
module.exports = router