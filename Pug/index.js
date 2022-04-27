const express = require ("express")

const router = require("./routes/productos")

const productRoutes = require("./routes/productos")

const app = express()

app.set("view engine", "pug")
app.set("views", "./views")

app.use(express.static("public"))

app.use(express.json())

app.use(express.urlencoded())

app.use("/api", productRoutes)

app.get("/", (req, res) => {
    res.sendFile("/public/index.html")
})

app.listen(8080, () => {
    console.log("Server is Ok")
})