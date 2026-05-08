const express = require('express')
const app = express()
const cors = require('cors')
const path = require("path")
const connectDB = require('./config/db')
const userRoute = require("./routes/userRoute")
const createScrape = require('./routes/scrapeRoute')
const storyRoute =  require('./routes/storyRoute')
require('dotenv').config()
app.use(cors())
connectDB();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/api/user", userRoute);
app.use("/api/scrape", createScrape);
app.use("/api/stories", storyRoute);
const port = process.env.PORT || 8000
app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))

