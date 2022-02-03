console.log("ARray Demo");
employees = new Array("1", "2", "3");
employees[10] = 44;
//employees = "SDsdf"
console.table(employees);

y = [8, 4, 5, 3];
y[10] = 100;
console.table(y);

y.sort((a, b) => a - b).forEach((p) => {
  console.log(p);
});

xx = y.map((f) =>{
  return f + 10;
});
console.log(xx);
