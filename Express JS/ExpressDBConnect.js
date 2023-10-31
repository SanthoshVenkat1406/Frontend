var express = require('express');
var my_sql=require('mysql');
var bparse = require('body-parser');
var expen = express();
//var mysqlconn=my_sql();
expen.use(bparse.urlencoded({ extended: true }));
var proc = require('process');
expen.use(bparse.json());
var cors=require('cors');
expen.use(cors());
var path = require('path');
var visitorCount = 0;

var mysql_conn= my_sql.createConnection({host:'localhost',port:3306,user:'root',password:'Sandygavs@2001', database:'world'});
mysql_conn.connect();
console.log("connected to database...");
console.log(mysql_conn.statistics());
console.log(mysql_conn.state)

function processResults(error, results)
{
    //console.log(results);
    for(i in results)
    {
        console.log(JSON.stringify(results[i]));
    }
}

expen.post('/signin', authenticate)
function authenticate(request, response) {
    console.log("Authenticating..");
    mysql_conn.query('SELECT * from users',processResults);


    /*var uname = request.body.UserID;
    var upwd = request.body.password;
    var result = false;

    for (i in users) {
        if (uname == users[i].username && upwd == users[i].password){
            result = true;
        break;}
    }

    if (result == true)
        response.send("<b> You are authenticated...</b>");
    else
        response.send("<b> Invalid user name / password..</b><br><a href='/login'>Retry login</a>");

}*/
}
expen.post("/addUser",addNewUser)
function addNewUser(request, response)
{
    var uid=request.body.userID;
    var upwd=request.body.password;
    var uemail=request.body.emailID;
    console.log("*****" +uid +"\t\t" + upwd + "\t\t" + uemail);
    var ins="insert into users values('" +uid + "','"+ upwd +"','" +uemail +"')";
    console.log('Executing -' +ins);
    mysql_conn.query(ins);
    console.log("Inserted 1 record into the database..");
}
expen.post("/deleteUser",deleteUser)
function deleteUser(request, response) {
    var uid = request.body.userID; 
    var del=" delete from users where userid='" +uid + "'";
    console.log('Executing - ' + del);
    mysql_conn.query(del);
    console.log("Deleted successfully...");
}
expen.post("/updateuser",updateUser)
function updateUser(request,response){
    var uid=request.body.userId;
    var upwd=request.body.password;
    var upd="update users set password='"+upwd+"' where userid='"+uid+"'";
    console.log('Update - ' + upd);
    mysql_conn.query(upd);
    console.log('Updated 1 record to the database')

}
expen.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers",

               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

expen.listen(proc.argv[2], "localhost"); //wait for the incoming req (GET,POST,PUT,UPDATE,TRACE etc..)
console.log("Started the server at port : " + proc.argv[2]);

