"use strict";
let magician = ['Harry', 'Ron', 'Hermione', 'luna'];
function makeGreat(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magician[i] = 'The Great ' + magicianArray[i];
    }
}
function showMagicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
makeGreat(magician);
showMagicians(magician);
