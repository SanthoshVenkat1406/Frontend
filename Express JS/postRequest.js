var express = require('express');
var bparse = require('body-parser');
var expen = express();
expen.use(bparse.urlencoded({ extended: false }));
var proc = require('process');
expen.get('/', welcome) //URI ends with / will call function
var path = require('path');
var visitorCount = 0;

function welcome(request, response) //sending a dynamic HTML page as response
{
    var str = "<html><body>"
    var str = "<b>First website is the express</b><br>";
    visitorCount++;
    str += "<b> You are visitor</b>" + visitorCount;
    var today = new Date();
    str += "<br><b>Today : </b></br>" + today + "<br>";
    str += "<br><a href='/login'>Click to login</a>";
    str += "</html></body>"
    response.send(str); //sends the response back
}

expen.get('/login', loginForm)
function loginForm(request, response) {
    console.log("Displaying login form");
    response.sendFile(__dirname + '/loginForm.html');
}
expen.post('/signin', authenticate)
function authenticate(request, response) {
    console.log("Authenticating..");
    var users = [{ username: 'Pawan', password: 'porn' },
    { username: 'sangeet', password: 'badawa' },
    { username: 'Blast Mohan', password: 'jailer' }
    ];

    var uname = request.body.UserID;
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

}
expen.listen(proc.argv[2], "localhost"); //wait for the incoming req (GET,POST,PUT,UPDATE,TRACE etc..)
console.log("Started the server at port : " + proc.argv[2]);
