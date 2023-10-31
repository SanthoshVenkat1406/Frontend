var express=require('express');
var expen=express();
expen.get('/',welcome) //URI ends with / will call function
var path=require('path');
var visitorCount=0;

function welcome(request,response) //sending a dynamic HTML page as response
{
    var str="<html><body>";
    var str="<b>First website is the express</b><br>";
    visitorCount ++;
    str+= "<b> You are visitor</b>" + visitorCount;
    var today=new Date();
    str +="<br><b>Today : </b></br>"+ today +"<br>";
    str +="<br><a href='/login'>Click to login</a>";
    str +="</html></body>"
    response.send(str); //sends the response back
}

expen.get('/login', loginForm)
    function loginForm(request, response)
    {
        console.log("Displaying login form");
        response.sendFile(__dirname+ '/loginForm.html');
    }
expen.get('/signin', authenticate)
function authenticate(request, response)
{
    console.log("Authenticating..");
    var validID="santhosh";
    var validpwd="bond007";
    var uname=request.query.UserID;
    var upwd=request.query.password;
    if(uname==validID && upwd==validpwd)
        response.send("<b> Welcome ...</b>");
    else
    response.send("<b> Invalid user name / password..</b><br><a href='/login'>Retry login</a>");
    response.send("<b> You are authenticated...</b>");
}
expen.listen(8000,"localhost"); //wait for the incoming req (GET,POST,PUT,UPDATE,TRACE etc..)
