var file = require("fs");
var readline = require("readline");

console.log("start");

file.readFile("mydata.txt", "utf-8", function (err, data) {
    if(err){
        console.log("Something wrong")
    }else{
        console.log(data);  
    }
});



// file.writeFile('hello.txt','asdfasdfa asfasfd',function(err){
//     if(err){
//         console.log("Sosmethoe wromg");
//     }
// });
file.appendFileSync('hello.txt','extra pav',function(err){

});
file.readFile("hello.txt", "utf-8", function (err, data) {
    if(err){
        console.log("Something wrong")
    }else{
        console.log(data);  
    }
});

//console.log(data);
console.log("end");
