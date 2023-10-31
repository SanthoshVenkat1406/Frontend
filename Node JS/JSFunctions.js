function test()
{
    console.log("In Test");
}
add= function(n1,n2)
{
    console.log("adding n1 and n2");
    return n1+n2;
}
console.log(test()) // calling the function 
console.log(test) // prints the value of test

var multiply= new Function("p1,p2","console.log(p1 * p2);return p1*p2;")
console.log("Multiply : " +multiply);

multiply(100,200);
v=add(100,30);
console.log("v :" +v);
console.log(add);