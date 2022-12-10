import express from "express";

const app = express()
const port = 3000
app.use(express.static('public'))

app.get('/', async (req, res) => {
    console.log( __dirname +"/public/tree.html")
    res.sendFile("/public/tree.html", {root: __dirname })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
