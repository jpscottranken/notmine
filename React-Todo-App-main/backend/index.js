const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const PORT = 3030
const app = express()

const todoRoutes = require("./routes/todoRoutes")
const connectionOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
}

app.use(express.json())
app.use(cors())

//	Replace <username> with your username.
//	The one you created in MongoDB and
//	NOT the one to log you into MongoDB
//
//	Replace the <userpassword> with the
//	password that goes with your <username>
const url = `mongodb+srv://<username>:<userpassword>@sandbox.xd2pm.mongodb.net/todolist?retryWrites=true&w=majority`

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to todolist database ")
  })
  .catch((err) => {
    console.error(`Error connecting to the todolist database. \n${err}`)
  })

app.use("/todos", todoRoutes)

app.listen(PORT, () => {
  console.log("The server is listening on port " + PORT)
})
