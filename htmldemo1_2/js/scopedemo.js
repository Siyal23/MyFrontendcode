console.log("Scope demo ");
let x = 20;
var y = 30;
//const z = 50;

function fun() {
  const z = 80;
  let a = 4;
  var b = 5;
  for (var i = 1; i < 5; i++) {
     w = 50;
    console.log(i);
  }
  //console.log(w);
}
fun();

//console.log("scope demo a : " + a);
console.log("scope demo i : " + w);
