x = new Date();
console.log(typeof x);
console.log(x.getDate());

function Employee(name, city) {
  this.name = name;
  this.city = city;
  this.getSalary = function () {
    return 10000;
  };

  return "Employee Info";
}
y = new Employee("naushad", "goa");
console.log(typeof y);
//console.log(y.getSalary());
