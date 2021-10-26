const express = require("express");
const app = express();

const bodyParser = require("body-parser");


const { json } = require("body-parser");
var mysql = require('mysql');


app.post('/add_account.html/user_page' , function (req, res){

   

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "upi"
});
var bal;
con.connect(function(error) {
   if (error) throw error;
   console.log("Connected!");
    let add_no = req.body.aadhar_number ;
    var sqlb ="SELECT Balance FROM "+req.body.Bank+" where Account_no = '"+req.body.Account_no+"' AND password = '"+req.body.password +"' ";
    con.query(sqlb, function (error, val,fields) {
      if (error) throw error;
       
       bal = val;
     
      
    var sql = "INSERT INTO  transfer ( Balance, Account_no ,password , Bank) VALUES ( '"+bal[0].Balance+"','"+ req.body.Account_no +"','"+ req.body.password +"','"+ req.body.Bank +"')"
   con.query(sql, function (error, result) {
      if (error) throw error;
      console.log('account created');
     
   });
   
 });


    var sqld ="SELECT * FROM transfer where Account_no = '"+req.body.Account_no+"' AND password = '"+req.body.password +"' ";
    con.query(sqld,function(err,result,fields){
        var final = result;
        res.write('<table border = 2px ><tr>');
        for(var column in result[0]){
         res.write('<th><label>' +  column + '</label></th>');
         
     }
     res.write('</tr>');

     for(var row in result){
        res.write('<tr>');
        for(var column in result[row]){
            res.write('<td><label>' + result[row][column] + '</label></td>')
           
        }
        res.write('</tr>');
     }
    
    res.end('</table>');
 })
}

     
      )
})
      module.exports = app;





























































      