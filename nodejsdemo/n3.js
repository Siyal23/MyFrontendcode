var file= require ("fs");
console.log("start")

data=file.readFile("./nodedata.txt",'utf-8',function(err,data){
    if(err){
        console.log("something wrong");
    }
    else{
        console.log(data);
    }

});

console.log("end")