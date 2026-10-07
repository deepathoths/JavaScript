// defined as key value pair values
let studentDetails={studentName: "Dee",
    studentAge:24,
    studentCourse: "Java",
    studentDuration: 3
};

console.log(studentDetails);// will print key value pairs
console.log(studentDetails.studentName);// value alone printed
console.log(studentDetails.city);//undefined as variable isn't defined
studentDetails.city="chennai";//undefined still as 
console.log(studentDetails.city);//chennai as value specified now
// Objects are mutable value can be changed, assigned at any time and even outside the definition block
studentDetails.city="Bangalore";
console.log(studentDetails.city)//Bangalore

delete studentDetails.city;
console.log(studentDetails.city)//undefined as deleted
