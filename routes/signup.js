var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mysql = require('mysql');

let final;
app.post('/signup.html/signup' , function (req, res) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "upi"
  });
con.connect(function(error) {
    if (error) throw error;
    console.log("Connected!");
     let add_no = req.body.Aadhar_no ;
    var sql = "INSERT INTO paise_de (Aadhar_no ,user_name , password) VALUES ( '"+add_no+"', '"+add_no+Math.floor(Math.random() * 100)+"', '"+add_no +Math.floor(Math.random() * 100)+"' )";
    con.query(sql, function (error, result) {
       if (error) throw error;
       console.log('account created');
     
    });
  });
console.log("response");
res.end(JSON.stringify("Your user name and password is send to your email login  from their "),);
})


module.exports = app;