"use strict";
let magician = ['Harry', 'Ron', 'Hermione', 'luna'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great ' + magicianArray[i];
    }
}
function showMagicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copyMagicianArray = copyArray(magician);
make_great(copyMagicianArray);
console.log('\n\nthis is my orignal array:');
showMagicians(magician);
console.log('\n\nthis is my modified copy of the array:');
showMagicians(copyMagicianArray);
