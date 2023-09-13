function makeCoffee(type){
if(type === "espresso"){
    return "here's your espresso"
}else if(type ==="Latte"){
    return "here is your latte"
}else{
    return `I'm not sure what ${type} is, but I did my best to make a drink based on one!`
}

}
console.log(makeCoffee("Beans"))