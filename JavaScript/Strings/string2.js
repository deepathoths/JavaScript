var revString="checking string operations and methods";

// codePointAt() returns ASCII values of the character at index position

console.log(revString.codePointAt(5)); // i ASCII 105

// substring - prints the value of string starting from mentioned index position

console.log(revString.substring(16)); //operations and methods
// beyond index prints blank space

//prints string from mentioned starting index position to one before mentioned ending index position

//inclusive of starting index position but exclusive of ending index position
console.log(revString.substring(16,32));// operations and m
console.log(revString.substring(32,16));// getting same result
var rev= "Sample revision of data sets for better operations";
console.log(rev.substring(30,20));
console.log(rev.substring(20,30));

//if end index is greater than length of string (20,100) it will print from 20 to end of string

//search : similar to indexOf but much faster, returns index of the first occurence
console.log(rev.search("data sets"));
var rev= "   Sample revision of data sets for better operations.  ";
console.log(rev);
// trim() : trims the leading and trailing spaces in the string
console.log(rev.trim());
console.log(rev.trimStart());
console.log(rev.trimEnd());

//padStart(length, charto be repeated)
console.log(rev.padStart(100,"*"));
console.log(rev.padEnd(100,"!"));

var rev= "   Sample revision of data sets for better operations.  ";
//slice: same as substring but can take negative index also
//indexing starts from 1 in reverse
console.log(rev.trim().slice(-10,-8));//pe
console.log(rev.trim().slice(-13,-10));//r o