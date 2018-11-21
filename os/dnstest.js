var dns = require("dns");
dns.lookup("www.github.com",function(err,address,family){
    console.log("ip",address);
    dns.resolve(address,function(err,hostnames){
        if(err){
            console.log(err.stack);
        }
        console.log("反向解析"+address+":"+JSON.stringify(hostnames));
    });
});