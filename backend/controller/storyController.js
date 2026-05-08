const Story = require("../model/storyModel")
const User = require('../model/userModel')
const getAllStory = async (req,res) =>{
    try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const stories = await Story.find()
      .sort({ points: -1 })
      .skip(skip)
      .limit(limit);

    const totalStories = await Story.countDocuments();

    res.status(200).json({
      totalStories,
      totalPages: Math.ceil(totalStories / limit),
      stories
    });
  } catch (error) {
     console.log(error)
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}
const getSingleStory = async (req,res) =>{
     try {
          const {id} = req.params
          const  story = await Story.findById(id)
          return res.status(200).json(story)
     } catch (error) {
         console.log(error)
         return res.status(200).json({message:"internal server error"})
     }
}

const toggleBookmark = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const storyId = req.params.id;

    const alreadyBookmarked =
      user.bookmarks.includes(storyId);

    if (alreadyBookmarked) {
      user.bookmarks = user.bookmarks.filter(
        (id) => id.toString() !== storyId
      );
    } else {
      user.bookmarks.push(storyId);
    }

    await user.save();

    res.status(200).json({
      success: true,
      message: alreadyBookmarked
        ? "Bookmark removed"
        : "Bookmark added",
      bookmarks: user.bookmarks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
module.exports = {
    getAllStory,
    getSingleStory,
    toggleBookmark
}