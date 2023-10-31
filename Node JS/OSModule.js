var osmod=require('os');
console.log(osmod.arch());
console.log("Free memory in bytes : "+ osmod.freemem());
var info=osmod.cpus();
for(cnt=0;cnt<info.length;cnt++)
{
    console.log("CPU #" +cnt+1)
    console.log(info[cnt].model)
    console.log(info[cnt].speed)
    console.log(info[cnt].times)
}

console.log('Your Machine name : ' +osmod.hostname);
console.log('Machine architecture : ' +osmod.machine);
console.log('platform : ' +osmod.platform);
console.log('version and release : ' +osmod.release);
console.log('Total memory : '+osmod.totalmem);
user=osmod.userInfo();
console.log("User : "+user);

