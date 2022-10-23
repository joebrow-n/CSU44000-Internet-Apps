const express = require('express')
const path=require("path")
const app = express()
const port = 5500
const fetch = require("node-fetch")
let publicPath= path.resolve(__dirname, "public")

app.use(express.static(publicPath))
app.listen(port, () => console.log(`App listening on port ${port}!`))

app.get('/forecast/:city', getForecast)
function getForecast(req, res) {
    let city = req.params.city
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=cb9186962287c117cf8bab828ca365dc&units=metric`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let result = json
        res.send(result)
    })
}

app.get('/air_pollution/:lon/:lat', getPollution)
function getPollution(req, res) {
    let lon = req.params.lon
    let lat = req.params.lat
    fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=cb9186962287c117cf8bab828ca365dc`)
    .then(res => res.json())
    .then(json => {
        console.log(json)
        let result = json
        res.send(result)
    })
}
