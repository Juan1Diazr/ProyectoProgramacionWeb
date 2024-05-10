var mysql = require("mysql2");
var axios = require("axios");
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/data", function (req, res) {
  var conexion = mysql.createConnection({
    host: "localhost",
    database: "usuarios",
    user: "root",
    password: "",
  });
  conexion.connect(function (err) {
    if (err) throw err;
    conexion.query( function (error, results, fields) {
      if (error) throw error;
      res.send(results);
      conexion.end();
    });
  });
});


var puerto = 3001;

app.listen(puerto, function () {
  console.log(`App esta escuchando correctamente en el puesto ${puerto}`);
});
