//logical operators && / || / !
let hasRegistered=true;
let admin=false;
let subscriber=true;
if (!hasRegistered)
{
    console.log("Register to login");
}
if (hasRegistered===true &&(admin===true||subscriber===true )){
    console.log("Login successful");
}
else
{
    console.log("Login Unsuccessful")
}