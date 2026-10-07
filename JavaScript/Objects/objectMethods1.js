const cars={name: "corolla",
    color: "red",
    make: " toyota",
    year: "2015"
};
const cars1=cars;

//freeze : no modify /add or delete
//seal: modify-yes , add , delete - no
//preventExtensions - modify or delete - yes , add -no

//will be true as the object references are ponting to the same set of data.
console.log(cars1==cars);//true
cars.model="awd";
console.log(cars);
console.log(cars1);// cars1 will also be the same as they point to the same data set
// changes made in cars will be reflected in cars1 too

//returns the array of key value pairs
console.log(Object.entries(cars));//[ 'name', 'corolla' ], [ 'color', 'red' ],.... like this
// every key value pair in an object is an entry
//# FREEZE
//Object.freeze(cars1);
console.log(Object.isFrozen(cars));// freezing cars1 also freezes cars

//freeze:  you cannot change, add, modify or delete a frozen object. complete read only object

delete cars1.color;// cant delete from a frozen object// wont thor error here but have to assign to see error thrown.
cars1.paint=true;// cant add as well.

console.log(cars);

//assigning and checking
let frozencars=Object.freeze(cars1);
frozencars.test=true;
console.log (frozencars);
console.log(Object.isFrozen(frozencars));//true
//not throwing error why? not throwing error but ignoring
// type error should say object is not extensible 

//cannot unfreeze an object but can create a copy and work on it.
console.log("*****".repeat(10));
//creating a copy of object: 2 methods: spread operator, fromEntries

//#1 using spread operator
const newcopyCars={...cars};
console.log(newcopyCars);

newcopyCars.test=true;
delete newcopyCars.color;
console.log(newcopyCars);
console.log("*****".repeat(10));
console.log(Object.entries(cars));//creates an array
console.log("@@@@@@".repeat(10));
//#2 another way to create copy of object
const anothercopyCars=Object.fromEntries(Object.entries(cars));//creates an object again from the array(created by Object.entries(cars))
console.log(anothercopyCars);
//Seal:  you cannot  add, or delete but modify existing attribute data.
console.log("////".repeat(10));
let sealedCars=Object.seal(anothercopyCars);
sealedCars.Bought=true; //cant add new attributes... should throw error
sealedCars.color="grey";// can modify existing ones
console.log(sealedCars);
console.log(Object.isSealed(sealedCars));
// cant unseal objects
console.log("---------".repeat(10));
//preventExtensions- cannot add any new key value pairs but can modify and delete keyvalue pairs
console.log(newcopyCars);
const preventExtensionCars=Object.preventExtensions(newcopyCars);
delete preventExtensionCars.year;
console.log("++++++++++".repeat(10));
console.log(newcopyCars);
console.log(preventExtensionCars);

// isExtensible

console.log(Object.isExtensible(preventExtensionCars));// false is not extensible cant add

//checks if they key is present in the object.
console.log(preventExtensionCars.hasOwnProperty("test"));//true

console.log({}=={});//false , two empty objects are not the same empty objects

//converts JS Objects to a lightweight JSON widely used in API testing 