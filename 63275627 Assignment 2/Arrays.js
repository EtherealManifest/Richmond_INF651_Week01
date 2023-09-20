//Arrays are essentaily mass-variable-declarations

//array Literal
let Oceans = ["Pacific", "Atlantic", "Southern", "Artic", "Antartic"];
//Array Constuctor
let Numbers = new Array (1,2,3,4)
//Each entry is assigned and index from 0 to the length of the array


 //this array cannot be modified, but can still be polled
 const movies = ["batman", "Superman"]

 let mixData = ["string", 23, null, true, ["apple", "orange"]]
//there isnt a limit to how deep you can nest arrays
 console.log(mixData[4][0]); // this accesses the first element in the fourth
                             // element of the array, which is itself an array

//to get the length of an array, use Array.length   (no parenthesis)
let fruits = ["apple", "orange", "Banana"]
fruits[3] = "blueberry";
//index not in range, Does it return an error? 
fruits[5] = "strawberry";
console.log("Length of Fruits[]:" + fruits.length);

// using unshift puts an entry at the beginning of the array
fruits.unshift("avacado");
//Array[].pop() removes the last element from an array
fruits.pop()
//using shift will remove the first element in the array
fruits.shift()
console.log("") // empty line
//for loops can be used to iterate through an array
for(let i = 0; i < fruits.length;i++){
    console.log(fruits[i]);
}
//alternate
console.log("\nAlternate Printing:")
for(let fruit of fruits){
    console.log(fruit);
}

console.log("\nAlternate:")
//alternate
fruits.forEach(fruit=> {
    console.log(fruit);
})


