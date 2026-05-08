const mongoose =require('mongoose');
const { scrapeAndSave }  = require("../scraper/scraper")

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log(`databse connected successfully`);
        scrapeAndSave()
   } catch (error) {
     console.log(error);
   }
}
module.exports = connectDB
