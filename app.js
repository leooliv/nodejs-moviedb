const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const db = require('./mysql')

db.connectDb()

const api_key = '1fed561f5b72b72e04f206943ef3eb2a'

const { MovieDb } = require('moviedb-promise')
const moviedb = new MovieDb(api_key)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

moviedb.searchMovie({query: 'Fight Club'}).then( res => {
  console.log(res.results[0])
}).catch(console.error)

app.get("/", (req, res) => {
  console.log("Hello Test Movie Api")
  res.send("Hello from Root")
})

app.listen(3030, () => {
  console.log("Nodejs app listening on port 3030");
});