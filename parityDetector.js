function isEven(num){
    if(num%2 == 0){
        return("Even")
    }
    else{
        return "odd"
    }
}
function taxCalculator(bill, rate){
    return((Number(bill)) + Number(bill * (rate/100)))
}

number = (prompt("Enter a number, I wll tell you if it is Even or odd in the console"))
console.log(isEven(number))
bill = prompt("Enter the bill, before tax")
tax = prompt("Good, now enter the tax rate, I will tell you how much you owe in the console")
console.log(taxCalculator(bill, tax))