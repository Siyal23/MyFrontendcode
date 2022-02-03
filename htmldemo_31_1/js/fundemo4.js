function myDisplayer(some) {
  console.log(some);
}
function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);
//myDisplayer(result);

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

//myFirst();
//mySecond();
