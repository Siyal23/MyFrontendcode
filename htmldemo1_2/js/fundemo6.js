function Employee(name, city) {
  this.name = name;
  this.city = city;
}

e1 = new Employee("Naushad", "GOA");
e2 = new Employee("RAhul", "GOA");
e3 = { name: "Abhi", city: "Pune",phone: {office:9889797,home:9899} }
e4 = [
  { name: "Ravi", city: "Pune" },
  { name: "Akhtar", city: "Pune" },
  { name: "Anshul", city: "Pune" },
  e3
]; // json object
//console.log(e3.phone.office)
for (employeeIndex in e4) {

  console.log(e4[employeeIndex].phone);
}
