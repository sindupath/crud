const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const mysql = require("mysql");
require('dotenv').config();



//express and port
const app = express();
const port = process.env.PORT || 2002;



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//static files
app.use(express.static("public"));


const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs', handlebars.engine);
app.set("view engine","hbs");



/*
//mysql 
const con = mysql.createPool({
    connectionLimit:10,
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME,
});




// CHECK DATABASE CONNECTION
con.getConnection((err,connection)=>{
    if(err) throw err
    console.log("database connection success");
});


   app.get('/',(req,res)=>{
    res.render("home");});  */

const routes = require("./server/routes/students")
app.use('/',routes);

// listening port

app.listen(port, ()=>{
    console.log("server run in success" ," http://localhost:"+port)
})