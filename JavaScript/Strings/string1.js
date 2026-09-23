var string1="This is a sentence";
console.log(string1);
//length not length()
console.log(string1.length);

//concat - does not change the original string
console.log(string1.concat(" This is a second one"));

//includes - case sensitive and space sensitive
console.log(string1.includes("this"));
console.log(string1.includes("This"));

//replaces only the first occurence of the character
console.log(string1.replace("i","u"));

//replaceAll
console.log(string1.replaceAll("i","u"));

//repeat
console.log(string1.repeat(5));

// repeat on diff lines
console.log(string1.concat("\n").repeat(10));

var string2='Another sentence.'
console.log(string2);

//RegEx


//startsWith
console.log(string1.startsWith("Th"));
console.log(string1.startsWith("th"));  //false
console.log(string1.startsWith(" Th")); //false

//endsWith
console.log(string1.endsWith("")); //true - all strings are empty at end
console.log(string1.endsWith("ce"));//true
console.log(string1.endsWith("cE"));//false

//char at index position
console.log(string1.charAt(0));

//indesOf - index of the character
console.log(string1.indexOf("t"));// indexing starts at 0
console.log(string1.charAt(string1.indexOf("a")+3));
//indexOf a is 8, 8+3=11, charAt(11)

//indexOf ("i",3)- ignores occurences till index position 3
console.log(string1.indexOf("i",3));

//if no occurence after position 6 returns -1
console.log(string1.indexOf("i",6));

//lastIndexOf() - returns the last occurence of the character
console.log(string1.lastIndexOf("i"));

//toLowerCase
console.log(string1.toLowerCase());

//to Upper Case
console.log(string1.toUpperCase());
//original string is not changed remains the same. you can store result in another variable

var string3=string1.toUpperCase();
console.log(string3);

