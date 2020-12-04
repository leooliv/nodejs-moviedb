const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "l123321",
  database: "moviedb",
});

module.exports.connectDb = () => {
  connection.connect((err) => {
    if (err) {
      throw err;
    }
    console.log("MySQL connected to moviedb ...");
  });
};

module.exports.getMovieList = () => {
  let queryString = "SELECT * FROM sakila.film;"

  connection.query(queryString, (err, rows, fields) => {

    if(err) {
      console.log("Failed to return users query: " + err)
      res.sendStatus(500)
      return
    }

    console.log(rows)
  })
}

module.exports.insertMovie = () => {

}
