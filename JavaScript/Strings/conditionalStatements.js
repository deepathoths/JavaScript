// gives wrong output as JS cannot compare NaN to NaN with == it will always be !=
let a1= 100-200+"hell0"-"5";
if(a1!=NaN)
{
    console.log("proper string");
}
else if(a1==NaN)
{
    console.log("hi");
}
else{
    console.log("none");
}
 // instead use this

 a2= 100-200+"hell0"-"5";
 if (Number.isNaN(a2)){
    console.log("correct");

 }
 else 
 {console.log("simple");

 }
 /* Remember this important difference
Expression	Result
NaN == NaN	false
NaN === NaN	false
NaN != NaN	true
Number.isNaN(NaN)	true
Number.isNaN(10)	false
*/