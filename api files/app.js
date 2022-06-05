const mongoose = require("mongoose")
const express = require("express")
const app = express()

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
require("dotenv").config();

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log("DB CONNECTED")
}).catch(() => {
  console.log("UNABLE to connect to DB")
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

const userRoutes = require("./routes/user")

app.use('/api', userRoutes) 


const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`App is running at ${port}`)
})