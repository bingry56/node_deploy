const express = require('express')
const app = express()



app.get("/", (req, res) => {
    res.send("<h1>hello world God is good all the time </h1>")
})



const port = 3000
app.listen(port, () => console.log("server started"))