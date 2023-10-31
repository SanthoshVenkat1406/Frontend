var io=require('fs');
io.readFile('data.txt','utf-8', function(err,lines)
{
console.log(lines);
});