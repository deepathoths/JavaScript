function display(name){
    let data = name;
    console.log(" name is : "+ data);
    //return data
}
let name1=display("dee");
console.log(name1);// undefined as no return

//console.log(data);//will throw reference error as we are trying to access a variable inside from outside
// we have to return it not access it from outside