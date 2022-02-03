console.log("Function Demo");

let x = 40;
x = "asf";

//x = new Number(40);
//x = new String("hello");
let hello = function () {
  console.log("Hello Function 0 start");
  //console.log(n1);
  console.log("==Hello Function 0 end==");
};
hello = function () {
  arglen = arguments.length;
  console.log(arglen);

  console.log("Hello Function 1 start");
  // console.log(n1);
  for (index in arguments) {
    console.log(arguments[index]);
  }
  console.log("==Hello Function 1 end==");
  return "Hello Funcion Parameters : " + arglen;
};

function add(i, j) {
  arglen = arguments.length;
  switch (arglen) {
    case 0: {
      return 0;
    }
    case 1: {
      return i;
    }
    case 2: {
      return i + j;
    }
    default: {
      return i + j;
    }
  }
}
var res = add(4, 5, 6, 7);
console.log(res);

rvalue = hello();
console.log(rvalue);
hello(111, 110);
hello(11, 41, 42, 14);
rvalue = hello(12, 81, 82, 83, 84, 85, 86, 87);
console.log(rvalue);
