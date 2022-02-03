
/*
1>display employee detail whose gender is female
2>display employee detail whose post is HTMLTableRowElement3>display employee detail whose age>55
4>display employee detail whoes salary>85000*/

var employee=[{empId:101,empname:"Siyal",emPost:"Java Developer",empSalary:85000,empAddress:"Chandrapur",gender:"Male",age:22},
{empId:101,empname:"Harsha",emPost:"Java Developer",empSalary:90000,empAddress:"Mumbai",gender:"Female",age:21},
{empId:102,empname:"Arnav",emPost:"Python Developer",empSalary:95000,empAddress:"Nagpur",gender:"Male",age:56},
{empId:103,empname:"Abhishek",emPost:"Database",empSalary:80000,empAddress:"Warora",gender:"Male",age:60},
{empId:104,empname:"Mohit",emPost:"HR ",empSalary:92000,empAddress:"Europe",gender:"Male",age:78},
{empId:105,empname:"Swagie",emPost:"Frontend Developer",empSalary:70000,empAddress:"Antartica",gender:"Male",age:82},
]
/*employee.forEach((val)=>{
    console.log(`Id:${val.empId},Name:${val.empname},post:${val.emPost},address:${val.empAddress},gender:${val.gender}`)
})*/

function searchFemale(emp){
    emp.forEach((val)=>{
        if(val.gender=="Female")
        {
            console.log(`Id:${val.empId},Name:${val.empname},post:${val.emPost},address:${val.empAddress},gender:${val.gender},age:${val.age},salary:${val.empSalary}`)
        }
    })

}
console.log("Employees who are females")
searchFemale(employee)

function searchAge(emp){
    emp.forEach((val)=>{
        if(val.age>55){
            console.log(`Id:${val.empId},Name:${val.empname},post:${val.emPost},address:${val.empAddress},gender:${val.gender},age:${val.age},salary:${val.empSalary}`)          
        }
    })
}
console.log("Employees whose age>55")
searchAge(employee)

function searchSal(emp){
    emp.forEach((val)=>{
        if(val.empSalary>85000){
            console.log(`Id:${val.empId},Name:${val.empname},post:${val.emPost},address:${val.empAddress},gender:${val.gender},age:${val.age},salary:${val.empSalary}`)              
        }
    })
}

console.log("Employees with salary>85000")
searchSal(employee)
