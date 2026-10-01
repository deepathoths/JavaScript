// largest of 3 numbers
let num1=70,num2=50,num3=-100;
if (num1>num2){
     if (num1>num3){
        console.log(num1 + " is greatest");
     }
     else{
        console.log(num3 + " is greatest");
     }
}
else if (num2> num3){
    console.log (num2 + " is greatest");
}
else 
{
    console.log(num3 + " is greatest");
}

/* Another method:
using existing Math: console.log(Math.max(num1,num2.num3)) */