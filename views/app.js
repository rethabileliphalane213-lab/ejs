const express = require("express")
const path = require("node:path")

const assetsPath = path.join(__dirname, "public")
const app = express()
app.use(express.static(assetsPath))
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
]
const users = ["Rethabile", "Thabelo", "Thato"]
app.set("views", path.join(__dirname))
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", { links: links,users:users })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})