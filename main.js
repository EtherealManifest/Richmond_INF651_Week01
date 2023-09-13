let theNumber = Number(prompt("What is your Grade?"));

switch (True) { 
    case (theNumber < 60):
        para.innerHTML = "F";
        break;
    case (theNumber < 70):
        para.innerHTML = "D";
        break;
    case (theNumber < 80):
        para.innerHTML = "C";
        break;
    case (theNumber < 90):
        para.innerHTML = "B";
        break;
    case (theNumber < 101):
        para.innerHTML = "A";
        break;
    default:
        para.innerHTML("Undefined");
}