const book ={title:"Dune", author:"Frank Herbert", Pages:412};
console.log(book);

let keys = Object.keys(book);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], ":", book[keys[i]]);
}

