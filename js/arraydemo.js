console.log("Array demo")
x=new Array(1,2,3)
console.log(x)
//we have table method that will show array in the form of table
console.table(x)


y=[4,5,6]
console.table(y)


employees=new Array("1","2","3");
employees[0]=11
console.table(employees)


let score=[10,20,30,40]
score.forEach(element => {
    console.log(element+10)    
});
