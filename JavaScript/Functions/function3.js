let addition=function add(a,b)
{
    return a+b;
}
console.log(addition)//name of function will be printed as we arent calling the function
console.log(addition(4,5))//9
console.log(addition())//Nan- undefined + undefined
console.log(addition(4))//Nan - number +undefined
addition = 300+298+2 //addition reassigned
console.log(addition+true)//600+1=601

let data=function (name){
    console.log(`Going to check if i can type in multiple lines.Looks like i have to type much more to get to the next line. Hi my name is ${name}!`)//multiple line string 
}

data("dee");