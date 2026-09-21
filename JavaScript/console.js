// to test console and BODMAS in js

//console.log
/*Use it for normal messages or values you want to see while developing.
"I want to see what value this variable currently has."*/

console.log("5"+5);
console.log("5"-5);
console.log("5"*5);
console.log("5"/5);
console.log(4-5+10*2+"print"+50);
var a1=4-5+10*2+"print"+50-10;
console.log(a1);
console.log(typeof a1);
console.log(4-5+10*2+"print"+(50-10));
console.log(4-5+10*2+"50"+50-10);
console.log(4-5+10*2+"50"+50-10*20);
console.log(4-5+10*2+"50"-50-10*20);

//console.info (same output as log but to give info)

/*Informational message

Use it when you want to explicitly indicate that the message is informational.
"This is useful information about what the application/test is doing."

In many browsers, info() may look very similar to log(). The distinction is primarily semantic.*/
let browser = "Chrome";

console.info("Test execution started");
console.info("Browser being used:", browser);

//console.debug
/*Debugging details

Use it for more detailed information that is mainly useful while troubleshooting.
"I don't normally need this message, but it will help me understand why something is failing."

This is particularly useful when debugging automation.*/
let username = "standard_user";
let password = "secret_sauce";

console.debug("Login method called");
console.debug("Username:", username);
console.debug("Password length:", password.length);
/*console.error() — Errors

Use it when something has gone wrong.
"Something failed and I need this to stand out as an error."*/
// try catch with console.error 

//console.warn - to provide earning to end user, yello color data- not yellow in mine

console.warn(" this is a warning");

process.stdout.write("mine not yellow ");

console.count("hello");
console.count("hello");
console.count("hello");
console.count("Samples");
console.count("Samples");

//console.clear();
console.countReset("Samples");
console.count("Samples");