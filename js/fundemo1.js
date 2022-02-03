console.log("Fun Demo")
/**
 * in javascript functions are not functions. functions are pure object
 */
function hello(n1)
{
    console.log("Hello Function "+n1)
}

hello("Siyal")

//the above code will work but lets do some changes 
hello=function()
{
    arglen=arguments.length
    console.log(arglen)

    console.log("--Hello function 1 starts--")

    for(index in arguments)
    {
        console.log(arguments[index])
    }

    console.log("--Hello function 1 ends--")
    return "Hello function is working"

}


rvalue=hello()//when i return from a function we have to store the returned value then print it.
console.log(rvalue)
hello(111,110)
hello(11,4,4,4)
rvalue=hello(12,8,8,8,8,8,8,8)
console.log(rvalue)


function add(i,j)//the value inside this parameter must be int
{
    return i+j
}
console.log(add(3,5))

