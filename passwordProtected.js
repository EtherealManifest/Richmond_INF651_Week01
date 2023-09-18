let password;
let userPassword;

do{
    password = prompt("enter a password");
    userPassword = prompt("enter the password again");

    if(userPassword !== password){
        alert("Password does not match. Please try again")
    }
}while(password !== userPassword);
