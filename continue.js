for(let songNum = 0; songNum < 10; songNum++){
    if(songNum == 5){
        console.log(`skipping song number ${songNum}`);
        continue;
    }
    console.log(`playing song number ${songNum}`);
}
console.log("end of the playlist");