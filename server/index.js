const express = require('express')
const path = require('path')
const port = 4000
const app = express()

app.use(express.static(path.join(__dirname, '../client/dist/')))
app.listen(port, () => console.log(`LISTENING ON PORT ${port}`))