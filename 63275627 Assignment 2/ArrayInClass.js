let colors = ["blue", "red", "green"]
console.log("First element in colors: " +colors[0] + 
            ". last Element in colors: " + colors[colors.length - 1]);

let week = ["Monday","Wednesday","Friday"];
console.log("week:\n" + week)
week.splice(1,0, "Tuesday");
week.splice(3, 0, "Thursday");
console.log("week:\n" + week)

let Numbers = [1,2,3,4,5,6,7,8,9];
console.log("Length of Numbers: " + Numbers.length)
Numbers.push(10, 11, 12);
console.log("Length of Numbers: " + Numbers.length)

let fruits = ["Green Apple", "Strawberry", "Dragonfruit"];
console.log(fruits)
fruits.unshift("Pineapple");
fruits.push("Mango");
console.log(fruits)

let countries = ["panama", "America", "China", "Peru", "Japan"]
console.log(countries);
countries.shift()
countries.pop();
console.log(countries);

let animals=["Kangaroo", "Koala", "Bat", "Badger", "Bear"]
console.log("animals" + animals);
if(animals.indexOf("Elephant") > 0){
    animals[animals.indexOf("Elephant")] = "Giraffe";
}
else if(animals.indexOf("Elephant") < 0){
    animals.push("Elephant");
}
console.log("Animals" + animals);

let Movies = ["Inception", "Batman", "The Hunchback of Notre Dam", "Tangled", "Bolt"]
for (let movie of Movies){
    console.log(movie + " : " + movie.length);
}

let sum = 0;
for(num in Numbers){
    sum += (Number(num));
}
console.log("Sum of numbers in Numbers: " + sum);

let Even = []
for(num in Numbers){
    if(num%2 == 0){
        Even.push(num);
    }
}
console.log("Evens: " + Even)
