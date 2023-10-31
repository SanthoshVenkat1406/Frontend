readinput=require('readline-sync')
function validate(empname, empage)
{
  if(empname.length <5)
    console.log("Length of the name should be min 5 characters");
  if(empage <18)
    console.log("Not Eligible for job under labour laws");
}
function callValidate()
{
    console.log("Enter your Name : ");
    empname=readinput.question();
    console.log("Enter your Age : ");
    empage=Number(readinput.question());
    validate(empname, empage);
}

console.log("Beginning Input")
callValidate(validate)