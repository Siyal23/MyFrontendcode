console.log("Scope demo")
/**
 * if i write var x=10 or let x=10 both will be visible
 */
let x=10
/**i create a block and say a=100 and run then 100 will come.that 
 * means even ig we write inside a block it is global.
 * 
 */
{
    var a=20
    let b=30//it will give error. that means b is locked inside a block now
}
console.log("Scope demo a: "+ a)
console.log("Scope demo :"+ b)

{
    var c=100
    let d=200//let is accessible only inside this block or its parent {}
    {
        console.log(d)
        var c=500
    }
    console.log(c)
}


/** 
 * if i say var then it wont be available locally.
 * 
 * 
*/
function fun()
{
    var fx1=11
    let fl1=14
    console.log("fun")
    {
        console.log(fx)
        console.log(fl)
        var fx1=13
        var fl1= 14
    }
    console.log(fx1)
    console.log(fl1)

}
fun()

//console.log(fx)
