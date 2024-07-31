const express = require("express")

const app = express()

app.use(express.json())
app.use("/form", require("./routes/user"))
app.listen(3000)
app.use(require("cors"))