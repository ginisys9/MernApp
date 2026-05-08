const { scrapeAndSave} = require('../scraper/scraper')
const createScrape = async (req,res) =>{
      
      const stories = await scrapeAndSave()
      return res.status(200).json({msg:"scraped successfully",stories})
}
module.exports = {
 createScrape
}
