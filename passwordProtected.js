let userPassword = "";
userPassword = prompt("Enter a Password")
do{
    if(userPassword === prompt("Enter your Password again, exactly as before: ")){
        para.innerHTML = "Well done! Your password is accepted, and is now set. Permanently."
        break;
    }
    else{
        para.innerHTML = "That will not do, your password does not match. Try again."

    }
}while(userPassword != prompt("Enter your password Again, exactly as before."))