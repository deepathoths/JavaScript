let sum= (a,b)=>a+b;
// no name , no function keyword, no need return all included in the arrow function.
console.log(sum(1,"Hello"));
console.log(sum(25));//25 + undefined = NaN
console.log(sum);// name of function as we arent calling it
console.log(sum());//undefined+undefined
console.log(sum(-1,1));
console.log(sum(5,10,15)); //extra arguments ignored
//let sum= (a,b)=>a+b+c;// c is undefined in the parameter result will be error as it is neither declared nor defined.
