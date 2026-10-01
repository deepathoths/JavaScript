let a1=500;

while (a1<600){
console.log(a1);
a1=a1+5;
}

//a1 is 595

console.log("***".repeat(10));

while(a1<1000){
    console.log(a1);
    a1=a1+20;
}

console.log("****".repeat(10));
var a2="new set of data";
while(a2.length>0)
{
   a2=a2.slice(0,a2.length-1);// length-1 =14 but chaacter at ending index is excluded
   console.log(a2); 
}
let rows=5;
while(rows>0){
    console.log("*".repeat(rows));
    rows-=1;
}
console.log("****".repeat(10));
while(rows<5){
    if (rows%2==0){
        console.log("$".repeat(rows));
    }
}