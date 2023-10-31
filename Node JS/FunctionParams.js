readinput=require('readline-sync')
add=function(n1,n2)
{
    return n1+n2;
}
function multiply(n1, n2)
{
    return n1*n2;
}
function calculate(c)
{
    console.log("Enter two values : ");
    v1=Number(readinput.question()); 
    v2=Number(readinput.question());  
    console.log('Result : '+c(v1,v2));

}
calculate(add);
calculate(multiply);