br = (questionNumber) => console.log('='.repeat(25), `\nQUESTION ${questionNumber}`);

br('1');
// QUESTION 1
function fozzleBear(){
    console.log('Wocka Wocka!');
}
fozzleBear();


br('2');
// QUESTION 2
function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
}
beaker('meep');


br('3');
// QUESTION 3
muppetShow = (a, b) => {
    if (a === 'Muppet' && b === 'Show'){
        console.log('It\'s time to play the music. It\'s time to light the lights.');
    }
}
muppetShow('Muppet', 'Show');


br('4');
// QUESTION 4
function kermit(){
    return 'Kermit the Frog';
}
console.log(kermit());


br('5');
// QUESTION 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
        return false;
    }
}
console.log('4', muppetShowSeasons(4), '\n5', muppetShowSeasons(5));


br('6');
// QUESTION 6
const manOrMuppet = function manOrMuppet(){console.log('Am I a man or am I a muppet?');};
manOrMuppet();


br('7');
// QUESTION 7
rainbowConnections = () => 'Someday we\'ll find it. The Rainbow Connection. The lovers, the dreamers and me.';
console.log(rainbowConnections());


br('8');
// QUESTION 8
// NO


br('9');
// QUESTION 9
// YES


br('10a');
// QUESTION 10a
const newMuppetMovies = ['The Muppets', 'The Muppets Most Wanted'];
console.log(newMuppetMovies);


br('10b');
// QUESTION 10b
const upperMovies = newMuppetMovies.map(function(movie){
    return movie.toUpperCase();
});
console.log(upperMovies);


br('11a');
// QUESTION 11a
const oldMuppetMovies = ["The Muppet Movie", "The Muppets Take Manhattan", "The Great Muppet Caper", "The Muppet Christmas Carol", "Muppet Treasure Island", "Muppets From Space"];
console.log(oldMuppetMovies);


br('11b');
// QUESTION 11b
const twoMovies = oldMuppetMovies.filter(movie => movie === "The Great Muppet Caper" || movie === "Muppet Treasure Island");
console.log(twoMovies);


br('12a');
// QUESTION 12a
const charactersOne = ['Statler', 'Waldorf'];


br('12b');
// QUESTION 12b
const charactersTwo = ['The Swedish Chef', 'Animal', 'Rowlf'];


br('12c');
// QUESTION 12c
randomMuppet = (characters) => {if (characters.length <=2){
    return characters[Math.floor(Math.random()*2)];
} else {
    return characters[Math.floor(Math.random()*3)];
}
}


br('12d');
// QUESTION 12d
console.log(randomMuppet(charactersOne));
console.log(randomMuppet(charactersTwo));


br('13');
// QUESTION 13
caps = (string) => {
    let howdy = '';
    for (i=0; i<string.length; i++){
        if (i < 5 && i % 2 === 0 || i > 5 && i % 2 !== 0){
            howdy += string[i].toUpperCase();
        }else {
            howdy += string[i];
        }
    }
    return howdy;
}

console.log(caps('hello world'));