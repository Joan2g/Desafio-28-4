const express = require ("express")

const {engine} = require("express-handlebars")

const router = require("./routes/productos")

const productRoutes = require("./routes/productos")

const app = express()

app.set("views", "./views")
app.set("view engine", "hbs")

app.engine(
    "hbs",
    engine({
        extname: "hbs",
        layoutsDir: __dirname + "/views/layouts",
        defaultLayout: "index"
    })
)

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