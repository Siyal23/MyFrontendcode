//x=Date()
x=new Date()
console.log(x.getDate())//this means we have one more function inside Date function
/**
 * output=Sat Jan 29 2022 11:12:29 GMT+0530 (India Standard Time)
 * but i want only date or some part of it.its type is string 
 * so i can call string methods.DAte is a function but in javascript i can make it as object with the help of new
 */

function Employee()
{
    this.getSalary=function(){
        return 10000;
    }
    return "Employee Info"
}
y=new Employee();
console.log(typeof y)
console.log(y.getSalary())

//i can do like
class Student{
    getRollNo(){
        console.log("student")
        return "5000"
    }
}
rr=new Student().getRollNo();
console.log(rr)