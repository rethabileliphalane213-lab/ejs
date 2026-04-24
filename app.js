const express = require("express")
const path = require("node:path")

const app = express()
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", { message: "EJS ROCKS" })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})