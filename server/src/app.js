const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', function (req, res) {
    res.json({
        message: 'Hello World'
    })
})

const port = process.env.PORT || 4000

app.listen(port, function () {
    console.log(`Running on ${port}`)
})