console.log("Data types Demo");

var uname;
uname = "Akhtar";
console.log(uname);

var x1 = 111;
var y1 = "111";

var x3 = '{}';
console.log(typeof x3)

var x2 = "hello";
var y2 = x2;
//x2 = "sadf"
console.log("datatypes " + (x1===y1));
console.log("datatypes " + (x2==y2));

var a = 1; // new Number(1);

b = 9999999; //new Number(999999)
c = 34.22; 
d = true; // Boolean
e = "Hi Buddy";  // String
f = "H";
g = [1, 2,3];// Array
g[3] = 5;

console.log(g[3])
h = { name: "naushad", city: "Mumbai" }; //JSON
i = null;
console.log(i);
console.log(typeof i);


no1 = "10";
no11 = parseInt(no1);
no2 = 20;
console.log(no11+no2);
